# Portafolio — Josué Álvarez

Landing page personal de **Josué Daniel Álvarez Alba**, Desarrollador Full Stack Junior con enfoque en backend, Python y bases de datos.

## Stack

- React 19
- Vite
- Tailwind CSS v4
- lucide-react

## Secciones

- **Hero**: presentación, disponibilidad para etapa productiva y accesos rápidos.
- **Sobre mí**: perfil profesional, enfoque backend y habilidades blandas.
- **Stack**: backend y datos, frontend y herramientas de despliegue.
- **Proyectos**: Cápi como caso destacado, más automatización con Python y experiencia en frontend.
- **Formación**: SENA, educación media y certificaciones.
- **Contacto**: correo, teléfono y GitHub.

## Estructura

```
.
├─ public/
│  ├─ profile.jpg
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  ├─ data/portfolio.js
│  ├─ hooks/useInView.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
└─ vite.config.js
```

Todo el contenido editable está centralizado en `src/data/portfolio.js`.

## Desarrollo

```bash
npm install
npm run dev
```

Disponible en `http://localhost:5173`.

## Producción

```bash
npm run build
npm run preview
```

El build se genera en `dist/`.

## Despliegue

El proyecto es una SPA estática y puede desplegarse directamente en Vercel o Netlify:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Autor

**Josué Daniel Álvarez Alba**
Itagüí, Antioquia, Colombia
[josualba526@gmail.com](mailto:josualba526@gmail.com) · [GitHub](https://github.com/josuealvarez21)
