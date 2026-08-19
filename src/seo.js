import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from './lang';

// Dominio propio pendiente de confirmar. Mientras tanto, el default de Vercel.
// Cuando exista dominio, definir REACT_APP_SITE_URL en Vercel; no hay que tocar codigo.
const SITE = process.env.REACT_APP_SITE_URL || 'https://structure-art-build.vercel.app';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Titulo, descripcion, Open Graph, canonical y hreflang por pagina.
export function useMeta({ title, description, image }) {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', SITE + pathname);
    setMeta('property', 'og:image', SITE + (image || '/media/video/hero-poster-1280.webp'));
    setLink('canonical', SITE + pathname);
    const rest = pathname.replace(/^\/(en|es)/, '');
    setLink('alternate', `${SITE}/en${rest}`, 'en');
    setLink('alternate', `${SITE}/es${rest}`, 'es');
    setLink('alternate', `${SITE}/en${rest}`, 'x-default');
  }, [title, description, image, pathname, lang]);
}
