# Structure Art — Estado de assets y pendientes

Generado el 2026-08-18. Leer antes de construir.

---

## 1. Qué ya está listo en este repo

### Imágenes
- `public/media/projects/` — **171 fotos reales de Adrián**, convertidas a WebP.
- Tres anchos por foto: **480 / 960 / 1440**, calidad 72.
- Orientación EXIF ya corregida (las fotos de teléfono no salen acostadas).
- Peso total 81 MB. Promedio a 480px: 36 KB.
- `public/media/projects/manifest.json` — cada archivo con dimensiones, orientación y rutas.

Categorías de origen:

| Carpeta | Fotos |
|---|---|
| `gates-fences` | 74 |
| `railings-stairs-decks` | 64 |
| `site-work` | 22 |
| `interior-remodel` | 11 |

### Proyectos
- `src/content/projects.json` — **9 proyectos propuestos**, agrupados automáticamente por fecha y hora de captura.
- Todo campo que requiere criterio humano dice literalmente `PENDIENTE`.
- Campo `_status: "PENDIENTE"` por proyecto, para que la UI pinte el badge.

### Video
Vive en `MEDIA-LIBRARY/05-VIDEO/` (fuera del repo, pesa mucho sin transcodificar).

```
ai-ambient/
  HERO-MAIN-wood-framing-30s.mp4      30s  1280x720   <- HERO principal
  brick-house-steel-deck-dusk.mp4      5s  1280x720
  aerial-house-dusk.mp4                5s  1280x720
  RESTRICTED-luxury-kitchen.mp4        5s  1280x720   <- ver seccion 4
  RESTRICTED-luxury-fireplace.mp4      5s  1280x720   <- ver seccion 4
ai-brand-motion/
  brand-diamond-1920x1080.mp4          5s  1920x1080
  brand-diamond-3516x2356-a.mp4        5s  3516x2356
  brand-diamond-3516x2356-b.mp4        5s  3516x2356
ai-commercial-30s/
  commercial-metal-shop-30s.mp4       30s  1280x720   <- comercial §06
ai-social-vertical/
  wood-sanding-closeup-30s.mp4        30s   720x1280  solo redes
  ai-vertical-17s.mp4                 17s  1072x1928  solo redes
real-footage/
  8 clips de Adrián (ver seccion 5)
```

---

## 2. Decisiones que quedaron cerradas

**Overlay del hero: `--charcoal`.** El hero es metraje de madera y luz cálida. El propio spec dice que un gradiente navy sobre imagen cálida enferma el color. Charcoal, 0.35–0.5, gradiente de abajo hacia arriba.

**Choque §10 / footer.** El ritmo tonal ponía §10 charcoal pegado al footer navy, lo que rompe las dos Iron Rules. Corrección: **§10 pasa a `--gray`**. Así el footer navy queda contra una sección clara y no hay dos oscuros en el mismo viewport.

**Duplicado eliminado.** Había dos copias byte a byte del mismo MP4. La segunda está en `_SUPERSEDED/duplicados/`.

---

## 3. Taxonomía de filtros, después de reclasificar por contenido

La agrupación original venía por FECHA de captura y estaba mal. Se revisaron las 171 fotos a ojo y se reagruparon por lo que muestran. Resultado: **8 proyectos reales**, no 9.

| Proyecto | Categoría | Fotos |
|---|---|---|
| Barandales de acceso en casa de ladrillo | Metal y Barandales | 50 |
| Cerca de malla y colado de postes | Portones y Cercas | 44 |
| Escaleras de acero en edificio de apartamentos | Metal y Barandales | 18 |
| Cerca de madera horizontal | Portones y Cercas | 15 |
| Andador de concreto | Concreto y Obra Exterior | 12 |
| Barandal y escalera de pórtico | Metal y Barandales | 7 |
| Cocina con backsplash de altura completa | Interiores, Piedra y Baño | 5 |
| Remodelación de baño | Interiores, Piedra y Baño | 4 |
| Cocina en mármol blanco con isla en cascada | Interiores, Piedra y Baño | 3 |
| Cocina en cuarcita con tarja de delantal | Interiores, Piedra y Baño | 3 |
| Tocadores en piedra | Interiores, Piedra y Baño | 2 |

Once proyectos. Las tres cocinas son de tres clientes distintos, confirmado por Adrián.

Conteo por categoría, con el mínimo de 2 para renderizar filtro:

| Filtro | Proyectos | Renderiza |
|---|---|---|
| Interiores, Piedra y Baño | 5 | sí |
| Metal y Barandales | 3 | sí |
| Portones y Cercas | 2 | sí |
| Concreto y Obra Exterior | 1 | queda en el límite |

Tres de cuatro pasan holgadamente. La categoría de piedra, que parecía la más débil, resultó la de más proyectos.

**Sobre la escalera de apartamentos.** Es un edificio multifamiliar, confirmado. Se puede decir "multifamiliar" con respaldo. No alcanza para decir "comercial": son cosas distintas y el spec prohíbe reclamar comercial sin obra comercial que enseñar.

**Los tocadores en piedra** son dos instalaciones sueltas. Es probable que pertenezcan a los mismos clientes de alguna de las cocinas. Falta que Adrián confirme para unirlos o dejarlos aparte.

**Por qué estaba mal.** Dos proyectos aparecían partidos en dos carpetas cada uno: los barandales de la casa de ladrillo estaban en `gates-fences` y en `railings-stairs-decks`, y la cerca de malla estaba en `gates-fences` y en `site-work`. No eran archivos duplicados, eran fotos distintas de la misma obra archivadas por separado, así que el conteo salía inflado.

**6 imágenes que no son proyectos** y quedaron fuera del portafolio, listadas en `no_publicar` dentro de `projects.json`: tres capturas de pantalla de Instagram, un anuncio publicitario, y dos fotos de la van de la empresa.

**2 imágenes sin clasificar**: una cerca de madera clara o intemperizada que no coincide con la de listón horizontal. Hay que confirmar si es otro predio.

---

## 4. Piedra y mármol es una línea de servicio real

Structure Art tiene equipo que trabaja piedra y mármol. Los clips de IA de cocina y chimenea están **basados en esa capacidad real**, no inventados de la nada.

Respaldo fotográfico real: las 11 fotos de `interior-remodel` documentan instalación de losa completa de cuarcita, backsplash de altura completa con veta continua, canto en inglete y ebanistería. Es fabricación e instalación de piedra hecha por el equipo.

Los archivos ya no llevan prefijo `RESTRICTED`. Ahora son `stone-marble-kitchen.mp4` y `stone-fireplace.mp4`.

Única regla que se mantiene, y es la regla propia del spec: **un render de IA nunca lleva encima título de proyecto, categoría, fecha ni barrio.** Puede ilustrar la capacidad de piedra en una sección de servicio. No puede aparecer como registro de una obra concreta, porque para eso están las fotos reales.

Los tres clips de rombo dorado son marca pura. El de taller de metal y el de estructura de madera muestran proceso, y son seguros con la misma condición.

**Piedra y mármol no está en la taxonomía del spec.** Es una línea de servicio con respaldo fotográfico real que hoy no tiene ni filtro ni sección. Hay que agregarla.

---

## 5. El footage real casi no sirve para web

| Archivo | Duración | Resolución | |
|---|---|---|---|
| IMG_0031.MOV | 22.8s | 1080x1920 | vertical |
| IMG_0032.MOV | 2.0s | 1920x1080 | horizontal, muy corto |
| VIDEO-2026-07-03-16-06-24 | 22.1s | 768x576 | horizontal, baja resolución |
| VIDEO-2026-07-03-16-06-13 | 32.4s | 576x768 | vertical |
| VIDEO-2026-07-03-16-06-34 | 31.6s | 576x768 | vertical |
| VIDEO-2026-02-22-18-28-07 | 21.4s | 480x640 | vertical |
| VIDEO-2026-02-22-18-26-30 | 16.8s | 480x640 | vertical |
| VIDEO-2026-02-22-18-54-39 | 16.1s | 480x854 | vertical |

Seis de los ocho son verticales y por debajo de HD. En un hero horizontal se ven pixelados. Sirven para redes y para un carrusel vertical en móvil, no para fondo de sección en escritorio.

Único clip real en HD horizontal: `IMG_0032.MOV`, y dura 2 segundos.

---

## 6. Falta transcodificar el video

Esta Mac no tiene ffmpeg, ni brew, ni ImageMagick. Sin eso no se puede convertir el video.

Los MP4 pesan entre 2.6 y 21 MB, en 1280x720. Para web hacen falta:
- MP4 H.264 y WebM, alrededor de 2 MB
- Frame de poster en WebP
- Loop del hero sin audio, con `playsinline`

Sin esto Lighthouse 90+ no se alcanza: el hero solo ya son 12 MB.

Se resuelve instalando ffmpeg, o subiendo los videos a Cloudinary o Mux y sirviéndolos desde ahí. La segunda opción además da streaming adaptativo y saca 100 MB del repo.

---

## 7. Lo que sigue faltando y solo Adrián puede dar

| Qué | Dónde pega |
|---|---|
| Nombre y barrio de cada proyecto | Portfolio, §04, páginas de detalle |
| Confirmar si los 9 grupos son 9 proyectos o menos | Todo el portafolio |
| Descripción por proyecto, EN y ES | Páginas de detalle |
| Timeline, materiales, alcance | Franja meta del detalle |
| Bio de Adrián, texto literal, EN y ES | §07, About |
| 5 testimonios reales | §09 |
| Foto de Adrián | §07, About |
| URL de Yelp | Footer, Contacto |
| Número de licencia | Footer |
| Fotos de mueble suelto y restauración | §03 lado STUDIO |
| Más obra de piedra fotografiada | Nueva categoría de piedra y mármol |

Sobre STUDIO: hay respaldo parcial. Las fotos de `interior-remodel` sí muestran ebanistería instalada, estante de nogal y trabajo de piedra. Lo que no existe es una sola foto de mueble suelto ni de restauración. Si STUDIO se va a sostener con lo que hay hoy, tiene que apoyarse en ebanistería y piedra, no en mobiliario.

Sobre piedra: es una sola sesión, del 17 de julio, once fotos, una cocina. Alcanza para probar la capacidad. No alcanza para llenar una galería.

---

## 8. Reglas que no se tocan

- Nada de porcentajes, presupuestos ni nombres de cliente en páginas públicas.
- Nada de inventar testimonios, barrios, licencia ni estadísticas.
- Ningún clip de IA con título, categoría o fecha encima.
- Nunca navy pegado a charcoal.
- Dorado solo en: relleno de botón, etiqueta eyebrow, regla de 1px, estado activo, iconos chicos, cifras. Nunca en texto corrido ni titulares.
- Ningún `PENDIENTE` visible en producción. Son andamio, no contenido.
