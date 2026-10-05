# Cómo publicar en el blog de CaribeDev

Los artículos del blog son archivos [MDX](https://mdxjs.com) (Markdown) guardados en este repositorio. Para publicar no necesitas tocar código: creas un archivo, abres un Pull Request y, al hacer merge, el artículo aparece en [`/blog`](https://caribedev.org/blog).

## Pasos rápidos

1. Crea un archivo en `src/content/blog/`. El nombre del archivo es la URL del artículo:

   ```text
   src/content/blog/mi-primer-articulo.mdx  →  /blog/mi-primer-articulo
   ```

   Usa minúsculas, sin acentos ni espacios, separando palabras con guiones.

2. Agrega el frontmatter (los metadatos entre `---`) al inicio del archivo y escribe tu contenido debajo:

   ```mdx
   ---
   title: "Mi primer artículo"
   description: "Un resumen corto de una o dos frases. Aparece en las tarjetas y en Google."
   date: "2026-10-10"
   author: "Kelly Villa"
   category: "Tutoriales"
   cover: "/images/blog/mi-primer-articulo.png"
   coverAlt: "Descripción de la imagen de portada"
   tags:
     - javascript
     - comunidad
   ---

   Aquí empieza tu artículo...
   ```

3. Revisa cómo se ve en local:

   ```bash
   yarn dev
   ```

   Abre <http://localhost:3000/blog>.

4. Abre un Pull Request. Cuando sea aprobado y mezclado, el artículo se publica automáticamente.

## Frontmatter

### Obligatorio

| Campo         | Ejemplo                       | Notas                                                    |
| ------------- | ----------------------------- | -------------------------------------------------------- |
| `title`       | `"Mi primer artículo"`        | Título del artículo.                                     |
| `description` | `"Resumen corto..."`          | Se muestra en las tarjetas, Google y redes sociales.     |
| `date`        | `"2026-10-10"`                | Fecha de publicación en formato `YYYY-MM-DD`.            |
| `author`      | `"Kelly Villa"`               | Si coincide con un organizador, se muestra su foto.      |
| `tags`        | `[javascript, comunidad]`     | Al menos uno. Cada tag tiene su página `/blog/tag/...`.  |

Si falta un campo obligatorio o una fecha no es válida, `yarn dev` y `yarn build` muestran un error indicando el archivo y el campo.

### Opcional

| Campo       | Ejemplo                                  | Notas                                                                 |
| ----------- | ---------------------------------------- | --------------------------------------------------------------------- |
| `cover`     | `"/images/blog/mi-articulo.png"`         | Imagen de portada (también se acepta `image`). Ver abajo.             |
| `coverAlt`  | `"Asistentes en el meetup de PyBAQ"`     | Texto alternativo de la portada, para accesibilidad.                  |
| `category`  | `"Tutoriales"`                           | Crea un filtro en `/blog` y una página `/blog/categoria/...`.         |
| `updatedAt` | `"2026-11-01"`                           | Fecha de la última actualización.                                     |
| `draft`     | `true`                                   | Borrador: se ve en `yarn dev` pero **no** se publica en producción.   |

Categorías sugeridas: `Tech`, `Tutoriales`, `UX/UI`, `Tips`.

## Imagen de portada

La portada funciona como en dev.to: aparece arriba del título del artículo y en la tarjeta del listado.

- Guarda la imagen en `public/images/blog/` y referénciala como `/images/blog/nombre.png`.
- Tamaño recomendado: **1000 × 420 px** (proporción 2.38:1). Imágenes con otra proporción se recortan al centro.
- Solo se aceptan imágenes locales (no URLs externas).
- Si no defines portada, se muestra una ilustración por defecto.

## Contenido

Puedes usar Markdown normal:

- Títulos con `##` y `###` (el título principal ya lo pone la página).
- Listas, **negritas**, _cursivas_, [enlaces](https://caribedev.org) y `código en línea`.
- Bloques de código con el lenguaje:

  ````md
  ```js
  console.log('Hola Caribe')
  ```
  ````

- Citas con `>`.
- Tablas (sintaxis de GitHub).
- Imágenes: `![Texto alternativo](/images/blog/foto.jpg)`. Siempre incluye el texto alternativo.

Por seguridad, las expresiones JavaScript dentro del MDX (`{...}`) están deshabilitadas.

## Checklist antes del Pull Request

- [ ] El nombre del archivo está en minúsculas y con guiones.
- [ ] Todos los campos obligatorios están completos.
- [ ] Las imágenes están en `public/images/blog/` y tienen texto alternativo.
- [ ] El artículo se ve bien en `yarn dev` (también en el celular).
- [ ] `draft: true` fue eliminado si el artículo está listo para publicarse.
