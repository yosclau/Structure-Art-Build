import { useEffect } from 'react';
import { SHOW_PENDING, logMissing } from '../config';

// Bloque de contenido pendiente. En desarrollo dibuja la forma final con una
// etiqueta discreta de que falta. En produccion conserva espacio y composicion
// sin etiqueta. La palabra PENDIENTE nunca llega al publico.
export default function Pending({ label, aspect, className = '', children }) {
  useEffect(() => {
    if (!SHOW_PENDING) logMissing(label, 'bloque renderizado sin contenido');
  }, [label]);

  const style = aspect ? { aspectRatio: aspect } : undefined;
  return (
    <div className={`pending-block ${SHOW_PENDING ? 'pending-dev' : ''} ${className}`} style={style} aria-hidden="true">
      <img className="pending-mark" src="/media/brand/logo-badge.webp" alt="" loading="lazy" />
      {children}
      {SHOW_PENDING && <span className="pending-label">{label}</span>}
    </div>
  );
}

// Seccion entera pendiente: en produccion no se renderiza y se registra.
export function PendingSection({ what, children }) {
  useEffect(() => {
    if (!SHOW_PENDING) logMissing(what, 'seccion omitida: quedaria vacia');
  }, [what]);
  if (!SHOW_PENDING) return null;
  return children;
}
