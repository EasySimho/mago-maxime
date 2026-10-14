/** A path inside the site, honouring the deploy base (e.g. /mago-maxime on GitHub Pages). */
export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
