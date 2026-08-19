import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lang';

// Marco de telefono con un vertical 9:16 de obra real. Solo se reproduce el
// que esta visible; sin audio por defecto, con boton para activarlo.
export default function PhoneReel({ src, caption }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(false);
  const { L, ui } = useLang();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio > 0.6),
      { threshold: [0, 0.6, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (visible) v.play().catch(() => {});
    else v.pause();
  }, [visible]);

  return (
    <figure className="phone-frame" ref={wrapRef}>
      <div className="phone-screen">
        <video
          ref={videoRef}
          src={src}
          muted={muted}
          loop
          playsInline
          preload="none"
        />
        <button
          type="button"
          className="phone-sound"
          aria-pressed={!muted}
          aria-label={muted ? L(ui.jobsite.sound_on) : L(ui.jobsite.sound_off)}
          onClick={() => setMuted((m) => !m)}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" />
              <line x1="16" y1="9" x2="21" y2="15" />
              <line x1="21" y1="9" x2="16" y2="15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18 6a8.5 8.5 0 0 1 0 12" />
            </svg>
          )}
        </button>
      </div>
      {caption && <figcaption className="phone-caption">{caption}</figcaption>}
    </figure>
  );
}
