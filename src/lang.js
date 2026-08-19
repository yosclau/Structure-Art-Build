import { createContext, useContext, useMemo } from 'react';
import { LANGS, DEFAULT_LANG } from './config';
import ui from './content/ui.json';

const LangContext = createContext({ lang: DEFAULT_LANG });

export function LangProvider({ lang, children }) {
  const value = useMemo(() => ({ lang }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// Hook principal: idioma actual, resolutor L({en,es}) y catalogo ui.
export function useLang() {
  const { lang } = useContext(LangContext);
  const L = useMemo(
    () => (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj[DEFAULT_LANG] : obj),
    [lang]
  );
  return { lang, L, ui };
}

export function isValidLang(l) {
  return LANGS.includes(l);
}

export function storedLang() {
  try {
    const s = window.localStorage.getItem('sa-lang');
    if (isValidLang(s)) return s;
  } catch (e) { /* almacenamiento bloqueado */ }
  const nav = (navigator.language || '').toLowerCase();
  return nav.startsWith('es') ? 'es' : DEFAULT_LANG;
}

export function persistLang(l) {
  try {
    window.localStorage.setItem('sa-lang', l);
  } catch (e) { /* almacenamiento bloqueado */ }
}

// Cambia el prefijo de idioma conservando el resto de la ruta.
export function switchLangPath(pathname, to) {
  const parts = pathname.split('/');
  parts[1] = to;
  return parts.join('/') || `/${to}`;
}
