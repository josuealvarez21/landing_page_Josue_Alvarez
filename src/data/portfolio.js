/**
 * Todo el contenido editable del portafolio vive aquí.
 * Cambia textos, links o tecnologías sin tocar los componentes.
 */

export const profile = {
  name: 'Josué Daniel Álvarez Alba',
  shortName: 'Josué Álvarez',
  role: 'Desarrollador Full Stack Junior',
  focus: 'Backend · Python · Bases de datos',
  location: 'Itagüí, Antioquia, Colombia',
  email: 'josualba526@gmail.com',
  phone: '+57 310 869 3139',
  phoneHref: '+573108693139',
  github: 'https://github.com/josuealvarez21',
  githubUser: 'josuealvarez21',
  photo: '/profile.jpg',
  availability: 'Disponible para etapa productiva SENA',
  headline:
    'Construyo aplicaciones completas, con especial cariño por el backend, los datos y el código que se entiende.',
  summary:
    'Desarrollador Full Stack Junior con bases sólidas para llevar un producto de la base de datos a la interfaz. Mi mayor fortaleza está en el backend, el diseño de bases de datos y Python, apoyándome en mi pensamiento lógico y algorítmico para resolver problemas.',
  summarySecondary:
    'Estudiante de Análisis y Desarrollo de Software (ADSO) en el SENA, en búsqueda de mi etapa productiva. Me integro bien en equipo y uso herramientas de IA (OpenCode, Gemini) como multiplicador para aprender rápido y entregar código de calidad.',
}

export const stats = [
  { value: '4', label: 'proyectos destacados' },
  { value: '2', label: 'demos en producción' },
  { value: 'ADSO', label: 'SENA · en formación' },
]

export const stack = [
  {
    title: 'Backend & Datos',
    tag: 'Mi fuerte',
    icon: 'server',
    highlight: true,
    description:
      'APIs REST, lógica de negocio, autenticación y modelado relacional. Donde mejor rindo.',
    items: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'MySQL',
      'Node.js',
      'Express',
      'JWT / OAuth2',
      'Docker',
    ],
  },
  {
    title: 'Frontend',
    tag: 'Producto completo',
    icon: 'layout',
    description:
      'Interfaces limpias, responsivas y con buen detalle visual cuando el proyecto lo pide.',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    title: 'Herramientas y despliegue',
    tag: 'Del local a producción',
    icon: 'tools',
    description:
      'Versionamiento, despliegue y un flujo de trabajo apoyado en inteligencia artificial.',
    items: ['Git', 'GitHub', 'Render', 'Vercel', 'Aiven', 'OpenCode', 'Gemini'],
  },
]

export const aboutCards = [
  {
    icon: 'database',
    title: 'Backend primero',
    text: 'Diseño APIs REST, modelos de datos y autenticación pensando en mantenibilidad, seguridad y rendimiento.',
  },
  {
    icon: 'cap',
    title: 'Formación ADSO · SENA',
    text: 'Tecnología en Análisis y Desarrollo de Software en formación, con proyecto integrador real y desplegado.',
  },
  {
    icon: 'sparkles',
    title: 'IA como multiplicador',
    text: 'Uso OpenCode y Gemini para acelerar el desarrollo, revisar decisiones técnicas y aprender más rápido.',
  },
]

export const projects = [
  {
    slug: 'capi',
    featured: true,
    name: 'Cápi',
    year: '2026',
    role: 'Proyecto académico · Full stack',
    tagline: 'Finanzas personales, de la base de datos a la interfaz.',
    description:
      'Plataforma para registrar ingresos y gastos, organizar presupuestos y cumplir metas de ahorro. La construí separando responsabilidades en tres frentes: API, modelo de datos e interfaz, y orquestando los tres hasta tenerla desplegada en producción.',
    stack: [
      'Python',
      'FastAPI',
      'MySQL',
      'SQLAlchemy',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'JWT',
      'Docker',
    ],
    demo: 'https://capi-front-ten.vercel.app',
    links: [
      { label: 'CapiBackend', url: 'https://github.com/josuealvarez21/CapiBackend' },
      { label: 'CapiFront', url: 'https://github.com/josuealvarez21/CapiFront' },
    ],
    modules: [
      {
        icon: 'server',
        name: 'CapiBackend',
        text: 'API REST con FastAPI y SQLAlchemy: autenticación JWT y Google OAuth2, CRUD de movimientos, metas y presupuestos, más un endpoint de dashboard.',
      },
      {
        icon: 'database',
        name: 'Modelo de datos',
        text: 'Diseño relacional en MySQL, scripts de inicialización y consultas para usuarios, categorías, movimientos, metas y presupuestos.',
      },
      {
        icon: 'layout',
        name: 'CapiFront',
        text: 'Interfaz con Next.js 16, React 19 y Tailwind 4: dashboard con gráficos, gestión de movimientos y CapiBot, un asistente con Gemini.',
      },
    ],
    note: 'La demo corre en un backend gratuito: si tarda unos segundos en abrir, es porque está despertando.',
  },
  {
    slug: 'carga-documentos',
    name: 'Carga de Documentos',
    year: '2026',
    role: 'Automatización · Python',
    tagline: 'Buscar prácticas y postularse, en piloto automático.',
    description:
      'Script en Python que recorre portales de empleo colombianos, filtra las ofertas según mi perfil y genera un correo personalizado por empresa. Incluye envío por Gmail con límites anti-baneo.',
    stack: ['Python', 'Playwright', 'Scraping', 'SMTP'],
    links: [],
    badge: 'Repositorio privado',
  },
  {
    slug: 'bot-ventas',
    name: 'Bot de Ventas',
    year: '2026',
    role: 'Datos · Automatización',
    tagline: 'Reportes de ventas que se generan solos.',
    description:
      'Automatización que vigila una carpeta, detecta reportes nuevos en CSV y Excel, los limpia y consolida, y genera gráficos y un resumen ejecutivo listo para revisar.',
    stack: ['Python', 'pandas', 'matplotlib', 'openpyxl'],
    links: [{ label: 'Repositorio', url: 'https://github.com/josuealvarez21/Trabajo_db' }],
  },
  {
    slug: 'invest-holdings',
    name: 'Invest Holdings',
    year: '2026',
    role: 'Frontend · Colaboración',
    tagline: 'Landing fintech con demo interactiva.',
    description:
      'Landing de una sola página para una fintech de inclusión social: demo de dos ventanas, simulador de ahorro y crédito, y formulario de captura de leads. Trabajo en equipo.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    links: [],
    badge: 'Colaboración · repo privado',
  },
]

export const education = [
  {
    title: 'Tecnología en Análisis y Desarrollo de Software (ADSO)',
    org: 'SENA',
    period: 'En formación',
    description:
      'Formación en desarrollo de software: lógica, bases de datos, backend, frontend y proyecto integrador.',
    current: true,
  },
  {
    title: 'Bachiller Académico',
    org: 'Instituto Educativo Innovar',
    period: '2023',
    description: 'Educación media culminada.',
  },
]

export const certifications = [
  { title: 'Manejo de Inteligencia Artificial', org: 'Certificación', year: '2025' },
  { title: 'Resolución de Problemas y Toma de Decisiones', org: 'Certificación', year: '2025' },
  { title: 'Manejo Básico de Herramientas Ofimáticas', org: 'SENA', year: '2023' },
]

export const softSkills = [
  'Pensamiento lógico y algorítmico',
  'Resolución de problemas',
  'Aprendizaje autónomo',
  'Adaptabilidad',
  'Organización',
  'Compromiso',
  'Trabajo en equipo',
]

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]
