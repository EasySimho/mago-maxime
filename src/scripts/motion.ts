import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

/** Freeze / release page scroll (menu, lightbox). */
export const lockScroll = (on: boolean) => {
  document.documentElement.style.overflow = on ? 'hidden' : '';
  if (lenis) on ? lenis.stop() : lenis.start();
};

export const markDealt = (els: Iterable<Element>) => {
  for (const el of els) el.classList.add('is-dealt');
};

/** Smooth scroll, synced with ScrollTrigger. Anchors glide instead of jumping. */
function initScroll() {
  if (!reducedMotion()) {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis!.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return;
    const target = document.querySelector<HTMLElement>(a.hash);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.6 });
    else target.scrollIntoView();
    history.replaceState(null, '', a.hash);
    // move focus to the section the marker introduces
    const section = (target.nextElementSibling as HTMLElement | null) ?? target;
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  });
}

/** Cards marked [data-deal] are dealt onto the table on a diagonal as they enter. */
function initDeal() {
  const els = gsap.utils.toArray<HTMLElement>('[data-deal]');
  if (reducedMotion()) return markDealt(els);
  ScrollTrigger.batch(els, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => {
      markDealt(batch);
      gsap.from(batch, {
        opacity: 0,
        x: -90,
        y: 140,
        rotation: -14,
        duration: 1.3,
        ease: 'expo.out',
        stagger: 0.09,
        clearProps: 'transform,opacity',
      });
    },
  });
}

/**
 * Stacked acts: each panel is sticky; when taller than the viewport it sticks by its
 * bottom edge. As the next act slides over, the one beneath recedes into the dark.
 */
function initStack() {
  const acts = gsap.utils.toArray<HTMLElement>('[data-stack] > .act');
  const fit = () =>
    acts.forEach((a) => a.style.setProperty('--stick', `${Math.min(0, window.innerHeight - a.offsetHeight)}px`));
  fit();
  new ResizeObserver(fit).observe(document.body);
  window.addEventListener('resize', fit); // mobile toolbars change the viewport, not the body
  if (reducedMotion()) return;
  acts.forEach((act, i) => {
    const next = acts[i + 1];
    const panel = act.querySelector<HTMLElement>('.act__panel');
    if (!next || !panel) return;
    gsap.to(panel, {
      scale: 0.92,
      '--dim': 0.75,
      ease: 'none',
      scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top', scrub: true },
    });
  });
}

/** Pills lean toward the pointer. */
function initMagnetic() {
  if (!finePointer() || reducedMotion()) return;
  document.querySelectorAll<HTMLElement>('.btn').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'expo.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'expo.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.18);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
    });
    el.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

export function initMotion() {
  initScroll();
  initStack();
  initDeal();
  initMagnetic();
  document.fonts?.ready.then(() => {
    ScrollTrigger.refresh();
    // arriving with #section in the URL: re-land once web fonts have reflowed the page above it
    const t = location.hash && document.querySelector<HTMLElement>(location.hash);
    if (t) (lenis ? lenis.scrollTo(t, { immediate: true }) : t.scrollIntoView());
  });
}

export { gsap, ScrollTrigger };
