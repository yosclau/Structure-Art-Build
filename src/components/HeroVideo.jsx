import { useEffect, useRef, useState } from 'react';

const POSTER = '/media/video/hero-poster-1280.webp';

// Video de fondo del hero. En movil y con prefers-reduced-motion solo se
// sirve el poster: el video (2.3MB) ni se descarga. El poster (50KB) pinta
// primero siempre.
export default function HeroVideo() {
  const ref = useRef(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    const decide = () => setUseVideo(wide.matches && !still.matches);
    decide();
    wide.addEventListener('change', decide);
    still.addEventListener('change', decide);
    return () => {
      wide.removeEventListener('change', decide);
      still.removeEventListener('change', decide);
    };
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const play = () => { v.play().catch(() => {}); };
    v.addEventListener('canplay', play);
    v.load();
    return () => v.removeEventListener('canplay', play);
  }, [useVideo]);

  if (!useVideo) {
    return <img className="hero-media" src={POSTER} alt="" fetchpriority="high" />;
  }
  return (
    <video
      ref={ref}
      className="hero-media"
      muted
      loop
      playsInline
      preload="none"
      poster={POSTER}
    >
      <source src="/media/video/hero.webm" type="video/webm" />
      <source src="/media/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
