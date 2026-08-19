# Structure Art — Brief de construcción

Sitio web para Structure Art, contratista general en Chicago con taller propio de metal y madera. Adrián Rodríguez, 8 años. Es su **primera presencia en línea**: no hay sitio previo ni redes establecidas. Tiene que verse terminado desde el día uno aunque falte contenido por llegar.

Posicionamiento: **"We Build What You Envision"**. De lo prefabricado a lo completamente hecho a medida.

---

## 0. LO PRIMERO: los assets ya existen. No los recrees.

El repo ya trae todo el material procesado. **No generes imágenes, no busques stock, no inventes rutas.**

```
public/media/projects/          442 WebP, 3 anchos (480/960/1440) por foto
  gates-fences/                 (carpetas de almacenamiento, NO son categorias)
  railings-stairs-decks/
  interior-remodel/
  site-work/
  manifest.json                 dimensiones y rutas de cada archivo

public/media/video/
  hero.mp4  hero.webm           30s, 1280x720, sin audio
  hero-poster-640/960/1280.webp
  ambient/                      4 loops sin audio
  brand/brand-diamond.mp4       animacion de marca (rombo dorado)
  commercial-metal-shop.mp4     30s con audio
  social/reel-01..06.mp4        6 verticales, obra REAL de Adrian
  social/ai-*.mp4               2 verticales de IA

src/content/projects.json       11 proyectos reales + bloque no_publicar
src/content/services.json       divisiones BUILT y STUDIO, servicios, futuros
src/content/about.json          biografia de Adrian EN/ES + proceso de 4 pasos
HANDOFF.md                      estado completo y pendientes
```

**Las carpetas dentro de `projects/` son solo almacenamiento.** La agrupación real por proyecto y categoría vive en `projects.json`. Lee siempre el JSON, nunca infieras categoría del nombre de carpeta.

`projects.json` trae un bloque **`no_publicar`** con 8 imágenes que NO son obra: capturas de Instagram, un anuncio, y la van de la empresa. Nunca las muestres.

---

## 1. Reglas duras

1. **Solo fotos reales en contexto de portafolio.** Todo lo que lleve título de proyecto, categoría, año o barrio tiene que salir de `projects.json`. Sin excepción.

2. **Los videos de IA no llevan etiqueta de proyecto.** Pueden ser fondo ambiental o textura en secciones oscuras. Nunca con título, categoría, fecha ni barrio encima. Están permitidos porque ilustran capacidades reales, no porque documenten una obra.

3. **Nada de porcentajes, presupuestos ni nombres de cliente.** Nunca "80% prefabricado". Nunca rango de presupuesto en página pública de proyecto. Nunca "Portón de Jason": usa "Cerca de madera horizontal".

4. **Solo afirmaciones verificables.** Nada de "98% de satisfacción" ni "120+ proyectos". Lo que sí es cierto: **"8 Years · Metal + Wood · Chicago"**.

5. **Multifamiliar sí, comercial no.** Hay una obra en edificio de apartamentos, así que "multifamiliar" tiene respaldo. "Comercial" no lo tiene. No lo digas.

6. **Nunca inventes testimonios, barrios, licencia ni fotos de equipo.** Si falta, no se renderiza. Ver sección 8.

7. **Cero texto hardcodeado.** Todo string visible sale de i18n en JSON.

---

## 2. Paleta

```
--bone:        #F4F1EB   fondo dominante
--gray:        #D8D5CB   secciones alternas
--charcoal:    #101010   secciones oscuras, overlay del hero
--navy:        #0E1E35   solo banda B2B y footer
--ink:         #1C1C1A   texto sobre claro
--muted:       #6B6862   texto secundario
--gold:        #C4A35A   SOLO acento
--white:       #FFFFFF   texto sobre oscuro
```

**Dorado, permitido:** relleno de botón primario, etiqueta eyebrow, regla de 1px, estado activo de nav y filtros, iconos pequeños, cifras de estadística.
**Dorado, prohibido:** texto corrido, titulares, rellenos grandes, degradados, dorado sobre dorado, título dorado sobre navy.

**Navy, dos reglas de hierro:**
1. Nunca navy pegado a charcoal. Siempre una sección clara en medio.
2. Nunca los dos oscuros en el mismo viewport, ni parcialmente al hacer scroll.

En sección navy: tipografía en white o bone. Dorado solo en uno de estos tres, nunca en los tres a la vez: eyebrow, botón, regla de 1px. CTA primario siempre dorado, nunca azul.

---

## 3. Ritmo tonal

```
§01 Hero              charcoal + video + overlay charcoal
§02 Cómo construimos  bone
§03 BUILT | STUDIO    izq charcoal / der bone
§04 Proyectos         bone
§05 Enfoque           gray
§06 Video comercial   charcoal
§07 El artesano       bone
§08 Desde la obra     bone        (marcos de teléfono, ver §8)
§09 Para contratistas gray + banda navy
§10 Testimonios       bone
§11 CTA final         GRAY
Footer                navy
```

**§11 va en gray, no en charcoal.** El spec original lo ponía charcoal pegado al footer navy, lo cual rompe las dos reglas de hierro. Corregido.

**Overlay del hero: charcoal**, 0.35 a 0.5, degradado de abajo hacia arriba. El metraje es madera y luz cálida; un overlay navy le tira el color. No lo cambies.

---

## 4. Home

**§01 Hero.** `hero.mp4` + `hero.webm`, con `hero-poster-1280.webp` como poster. `muted loop playsinline preload="none"`, autoplay tras `canplay`. **En móvil y con `prefers-reduced-motion`, solo poster, sin descargar video.** El poster pesa 50KB y el video 2.3MB: el poster pinta primero siempre.
Titular "We Build What You Envision". Bajada "From ready-made to custom-built. Your budget. Our craftsmanship." CTA dorado "START YOUR VISION". Toggle EN|ES fijo arriba a la derecha.

**§02 Cómo construimos.** Bone, aire, editorial. "From Ready-Made to Completely Custom." Tres pasos: READY MADE → ELEVATED → CUSTOM. Sin porcentajes.

**§03 BUILT | STUDIO.** Lee `services.json`. Izquierda charcoal = BUILT con sus 4 servicios y foto real. Derecha bone = STUDIO con sus 4 servicios.
**STUDIO se renderiza completo.** Sus servicios traen `status: "pending"` porque las fotos no existen todavía, no porque el servicio no exista. Donde iría la foto, pon el marcador de la sección 8. No escondas STUDIO.

**§04 Proyectos.** Grid de 6 desde `projects.json`, 3 columnas en escritorio, 1 en móvil. Foto real, título, categoría. Hover con zoom suave.

**§05 Enfoque.** Gray. Explica el rango de prefabricado a medida en lenguaje de PROCESO. Sin porcentajes. Usa la secuencia de colado de postes del proyecto `chain-link-fence`: excavación, cimbra, concreto, nivelación. Es el mejor material de proceso que hay.

**§06 Video comercial.** Charcoal. `commercial-metal-shop.mp4`, con controles y audio, no autoplay. "See How We Build. Metal. Wood. Construction. One team."

**§07 El artesano.** Bone. **La biografía ya existe**, completa en EN y ES, en `src/content/about.json`. Es texto ya trabajado: úsalo **verbatim**, no lo parafrasees ni lo reescribas. Incluye párrafos, cita destacada, misión y CTA.
Solo el retrato de Adrián está pendiente (`bio.portrait: "PENDIENTE"`): aplica sección 8 a ese hueco. La franja "8 Years · Metal + Wood · Chicago" sí va.
`about.json` trae también un bloque **`_frases_a_retirar`** con copy del sitio viejo que choca con las reglas nuevas: menciones de presupuesto, garantías y promesas no verificables. **No las traslades.**

**§08 Desde la obra.** Bone. **Sección nueva, no estaba en el spec original.** Ver sección 8 de este documento.

**§09 Para contratistas.** Gray con banda navy arriba. Capacidades, tiempos de entrega, seguro. Formulario corto. Tono profesional y sobrio.

**§10 Testimonios.** Bone. **No hay testimonios todavía.** Aplica sección 8: estructura visible, contenido marcado pendiente. Jamás inventes citas.

**§11 CTA final.** Gray. "You Bring The Vision. We'll Find The Way To Build It." CTA dorado.

**Footer.** Navy. Logo, navegación, tags de servicio, contacto, redes con iconos de línea que pasan a dorado en hover. **Sin línea de licencia** hasta tener número real. Yelp **omitido** hasta tener URL; un icono sin destino es un control muerto.

---

## 5. Marcos de teléfono, §08

Esta sección muestra los 6 verticales de obra real dentro de marcos de teléfono, en carrusel horizontal.

Funciona porque cada marco mide unos 300px de ancho y el metraje es de 480 a 1080px: se ve nítido. Y porque combina web con el formato en que la gente ya consume contenido.

- 6 marcos con `social/reel-01..06.mp4`, verticales 9:16
- Sin audio por defecto, con botón para activarlo
- Solo se reproduce el que está visible; los demás pausados
- `preload="none"` y carga diferida
- Encabezado tipo "From the Job Site" / "Desde la obra"
- **Estos son obra real de Adrián, no de IA.** Pueden llevar pie de foto descriptivo.

Los dos verticales de IA (`social/ai-*.mp4`) quedan disponibles pero **no van aquí**, porque esta sección se lee como documental. Úsalos como textura si hace falta, sin etiqueta.

En esta misma sección va el espacio para reseñas: marcos de teléfono que mostrarán capturas de Instagram y de Google. Hoy van con el marcador de la sección 8.

---

## 6. Portafolio

Bone. Solo fotos reales.

Filtros, exactamente estos cuatro:

| EN | ES | Proyectos |
|---|---|---|
| All | Todos | 11 |
| Metal & Railings | Metal y Barandales | 3 |
| Gates & Fencing | Portones y Cercas | 2 |
| Interior, Stone & Bath | Interiores, Piedra y Baño | 5 |
| Concrete & Site Work | Concreto y Obra Exterior | 1 |

Los cuatro se renderizan, incluido Concreto con un solo proyecto. Es una capacidad real y esconderla en un lanzamiento no tiene sentido. **Deja el mínimo como constante configurable** para poder subirlo a 2 después.

Filtro activo en píldora dorada. 3 columnas escritorio, 2 tablet, 1 móvil. Tarjetas 4:3, lazy load, WebP, srcset con los tres anchos.

**Página de detalle** `/portfolio/:slug`: imagen principal + miniaturas, título, categoría, año. Descripción bilingüe. Franja meta con Timeline, Materiales, Alcance. Proyectos relacionados. Sin "service mix", sin porcentajes, sin presupuesto.

### Galería completa de proceso

Cada proyecto trae **todas** sus fotos en `images`, no solo la portada. Varios documentan el proceso entero y ese material es de lo mejor que hay. Muéstralo.

En cada página de detalle, debajo de la imagen principal, va una **galería completa** con todas las fotos del proyecto:

- Grid tipo mosaico que respeta la orientación de cada foto (el JSON trae `orientation` por imagen: `landscape` o `portrait`). No recortes verticales a 4:3, se pierden.
- Clic abre un lightbox con navegación por teclado y gestos, contador "3 / 44", cierre con Escape.
- Lazy load; usa el ancho 480 en el grid y 1440 en el lightbox.
- Orden: el del array `images`, que ya viene cronológico. Así la secuencia de proceso se lee sola, de excavación a terminado.

Los que más lo aprovechan:

| Proyecto | Fotos | Qué muestra |
|---|---|---|
| `chain-link-fence` | 44 | Excavación, cimbra de cartón, colado, nivelado con hilo, poste plomado, cerca terminada |
| `brick-entry-railings` | 50 | Escalones antes, fabricación, montaje, acabado |
| `concrete-walkway` | 12 | Demolición, excavación, cimbra, colado, acabado |
| `kitchen-fullheight-backsplash` | 5 | Instalación de losa y resultado final |

En §05 de la home, reusa la secuencia de postes de `chain-link-fence` como tira horizontal de 5 o 6 fotos. Es la prueba visual del "cómo construimos", y hoy está enterrada.

---

## 7. Otras páginas

**Servicios.** BUILT | STUDIO expandido con el mismo contraste tonal que §03. "How It Works" ampliado. Bloque B2B abajo en gray con banda navy.

**Nosotros.** Biografía de Adrián (pendiente), fotos de equipo (pendientes), proceso de cuatro pasos: VISITA, DISEÑO, CONSTRUCCIÓN, ENTREGA. Franja "8 Years · Metal + Wood · Chicago".

**Contacto.** Bone. Formulario a la izquierda, contacto directo y mapa a la derecha. Campos: nombre, teléfono, email, tipo de proyecto, rango de presupuesto, mensaje. Formspree `mreyjzge`. Validación en línea, honeypot, estados de éxito y error bilingües.
Contacto directo con botones de 48px mínimo: llamada, WhatsApp, email, Instagram, Facebook.

**Trade Partners.** Capacidades, tiempos, seguro, formulario. Directo y profesional.

**Privacidad.** Política estándar.

Enlaces reales, no inventes ninguno:
```
Instagram  @structure_art_built
Facebook   facebook.com/share/1AmXmGRe7j
WhatsApp   wa.me/14709148996   (470-914-8996)
Yelp       pendiente, omitir por ahora
```

---

## 8. Sistema de pendientes

Es la pieza central. El sitio arranca con contenido faltante y **tiene que verse terminado igual**.

Regla: cualquier campo con valor `"PENDIENTE"` o servicio con `status: "pending"` **no imprime esa cadena en producción**. En vez de eso:

- **En desarrollo** (`SHOW_PENDING = true`): se dibuja el bloque con su forma final, fondo sutil, borde punteado y una etiqueta discreta que dice qué falta. Ej. "Aquí van reseñas", "Aquí va la foto del proyecto", "Aquí va la biografía".
- **En producción** (`SHOW_PENDING = false`): el bloque conserva su espacio y su composición, sin la etiqueta. Si una sección entera quedaría vacía, no se renderiza y se registra en consola qué falta y por qué.

Usa una sola constante para alternar. Nunca dejes la palabra PENDIENTE visible al público.

Aplica a: **retrato de Adrián** (la biografía ya existe, ver §07), testimonios, fotos de equipo, barrio y año de cada proyecto, fotos de STUDIO, URL de Yelp, número de licencia.

**Todo esto se llena después editando JSON, sin tocar componentes.** Ese es el requisito de diseño más importante del proyecto: agregar un servicio nuevo como A/C, o un proyecto nuevo, o los testimonios cuando lleguen, tiene que ser una entrada en JSON. Nada de estructuras hardcodeadas.

---

## 9. Técnico

**Base.** El repo es Create React App con `react-scripts` 5.0.1 y React 18. Ya existe `src/lang.js` con 292 líneas de EN/ES, **pero es del posicionamiento anterior** ("CUSTOM METAL Decks, BUILT TO LAST"). **Reescríbelo completo**, no lo extiendas. También sobra `src/pages/WhyUs.jsx`, que no va en la arquitectura nueva.

**Bilingüe.** Toggle EN|ES arriba a la derecha, dorado en activo. Persistencia en localStorage. Detección de idioma del navegador en la primera visita. Rutas con prefijo: `/en/...` y `/es/...`. Etiquetas `hreflang`.

**Imágenes.** Ya están en WebP con tres anchos. Usa `srcset` con los tres. `loading="lazy"` bajo el pliegue. 4:3 en tarjetas de proyecto.

**Video.** `preload="none"` en todo. Poster siempre. Sin video en móvil para el hero. Respeta `prefers-reduced-motion`.

**Rendimiento.** Code splitting por ruta. Sin CSS ni JS bloqueante. Meta: Lighthouse alto. Con 110MB de media en el repo, la clave es que casi nada cargue de inicio.

**SEO.** Meta descriptions EN y ES, Open Graph, schema LocalBusiness y Organization, sitemap por idioma, robots.txt. **Schema Review solo cuando existan reseñas reales.**

**Accesibilidad.** WCAG 2.1 AA. HTML semántico, ARIA, foco manejado. Dorado sobre navy da 7:1 y pasa AAA.

**Móvil.** 320 a 1920 fluido. Menú hamburguesa bilingüe. Una columna. Barra inferior fija con Llamar, WhatsApp y Cotizar, botones de 48px. **Sin botón flotante de WhatsApp en móvil**, choca con la barra. En escritorio sí, discreto, abajo a la derecha.

**Deploy.** Vercel en push. `vercel.json` ya tiene el rewrite de SPA. Sin secretos en el código.

---

## 10. No hagas

1. No inventes testimonios, nombres, barrios, licencia ni estadísticas.
2. No publiques porcentajes, mezcla de servicios ni presupuestos en páginas públicas.
3. No uses nombres de cliente como título.
4. No etiquetes material de IA como proyecto.
5. No uses las 8 imágenes de `no_publicar`.
6. No digas "comercial". Multifamiliar sí.
7. No hardcodees strings visibles.
8. No pongas dos secciones oscuras seguidas.
9. No uses dorado en texto corrido, titulares ni rellenos grandes.
10. No pegues navy con charcoal.
11. No pongas CTA azul. Siempre dorado.
12. No dejes "PENDIENTE" visible en producción.
13. No escondas STUDIO por no tener fotos. Renderízalo con marcador.
14. No recrees assets. Ya están.

Cuando algo falte, deja la sección con su forma, marca el hueco y regístralo. Nunca lo llenes con contenido inventado.
