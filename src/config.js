// Configuracion global del sitio.
// SHOW_PENDING: true dibuja los bloques pendientes con etiqueta (desarrollo).
// false conserva la composicion sin etiqueta y omite secciones vacias (produccion).
export const SHOW_PENDING = process.env.NODE_ENV !== 'production';

// Minimo de proyectos para que un filtro del portafolio se renderice.
// Hoy 1 para que "Concreto y Obra Exterior" salga en el lanzamiento; subir a 2 despues.
export const MIN_PROJECTS_PER_FILTER = 1;

export const LANGS = ['en', 'es'];
export const DEFAULT_LANG = 'en';

export const CONTACT = {
  phoneDisplay: '(470) 914-8996',
  phoneHref: 'tel:+14709148996',
  whatsapp: 'https://wa.me/14709148996',
  email: 'Structureartco@gmail.com',
  instagram: 'https://www.instagram.com/structure_art_built',
  instagramHandle: '@structure_art_built',
  facebook: 'https://facebook.com/share/1AmXmGRe7j',
  yelp: 'PENDIENTE',
  license: 'PENDIENTE',
  formspree: 'https://formspree.io/f/mreyjzge',
};

// Marca un valor de contenido como faltante. Nunca se imprime tal cual.
export const isPending = (v) =>
  v == null || v === '' || (typeof v === 'string' && v.startsWith('PENDIENTE'));

// Registro en consola de contenido omitido en produccion.
export const logMissing = (what, why) => {
  // eslint-disable-next-line no-console
  console.info(`[contenido pendiente] ${what} — ${why}`);
};
