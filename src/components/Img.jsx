// Imagen de proyecto. Construye srcset SOLO con los anchos que trae el objeto
// `srcset` del JSON: 47 de 163 fotos no tienen los tres anchos y armar rutas
// a mano apuntaria a archivos inexistentes.
export default function Img({ image, alt, sizes, eager = false, className }) {
  if (!image || !image.srcset) return null;
  const widths = Object.keys(image.srcset).sort((a, b) => a - b);
  const srcSet = widths.map((w) => `${image.srcset[w]} ${w}w`).join(', ');
  const largest = image.srcset[widths[widths.length - 1]];
  return (
    <img
      src={largest}
      srcSet={srcSet}
      sizes={sizes || '(max-width: 767px) 100vw, 33vw'}
      alt={alt || ''}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}

// Mayor ancho disponible de una imagen (para lightbox / imagen principal).
export function largestSrc(image) {
  if (!image || !image.srcset) return null;
  const widths = Object.keys(image.srcset).sort((a, b) => a - b);
  return image.srcset[widths[widths.length - 1]];
}
