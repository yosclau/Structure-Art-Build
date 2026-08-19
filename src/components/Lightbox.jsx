import { useCallback, useEffect, useRef } from 'react';
import { largestSrc } from './Img';
import { useLang } from '../lang';

// Lightbox de galeria: navegacion por teclado y gestos, contador, Escape.
export default function Lightbox({ images, index, onClose, onMove, altBase }) {
  const { L, ui } = useLang();
  const touchX = useRef(null);
  const closeRef = useRef(null);

  const prev = useCallback(() => onMove((index - 1 + images.length) % images.length), [index, images.length, onMove]);
  const next = useCallback(() => onMove((index + 1) % images.length), [index, images.length, onMove]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${altBase} — ${index + 1} / ${images.length}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 48) prev();
        else if (dx < -48) next();
        touchX.current = null;
      }}
    >
      <img src={largestSrc(img)} alt={`${altBase} ${index + 1}`} />
      <div className="lightbox-count" aria-hidden="true">{index + 1} / {images.length}</div>
      <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label={L(ui.detail.lightbox_close)}>&times;</button>
      <button type="button" className="lightbox-btn lightbox-prev" onClick={prev} aria-label={L(ui.detail.lightbox_prev)}>&#8249;</button>
      <button type="button" className="lightbox-btn lightbox-next" onClick={next} aria-label={L(ui.detail.lightbox_next)}>&#8250;</button>
    </div>
  );
}
