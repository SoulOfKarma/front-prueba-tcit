# Front Prueba TCIT

Frontend del challenge técnico Full Stack — una app de gestión de posts (crear, listar, filtrar y eliminar) construida con **Vue 3** (Composition API) y **Pinia**, consumiendo una API REST en Node.js con base de datos SQL.

## Stack

- [Vue 3](https://vuejs.org/) — Composition API
- [Pinia](https://pinia.vuejs.org/) — estado global
- [PrimeVue](https://primevue.org/) — componentes UI (tema Aura)
- [Vite](https://vite.dev/) — build tool
- TypeScript, ESLint, Prettier, Vitest

## Funcionalidades

- Crear posts (nombre + descripción)
- Eliminar posts
- Listar posts
- Filtrar posts por nombre (client-side, sin golpear la API)

La lista completa de posts se pide al backend **una sola vez** al cargar la vista (`onMounted`); el filtrado corre en el store sobre los datos ya cargados.

## Estructura

```
src/
├── components/
│   ├── PostForm.vue      # formulario de creación
│   ├── PostFilter.vue    # input + botón de búsqueda por nombre
│   └── PostList.vue      # tabla de posts con acción de eliminar
├── stores/
│   └── posts.ts          # estado global (Pinia): fetch, create, delete, filtro
├── services/
│   └── posts.api.ts      # llamadas fetch a la API REST
├── types/
│   └── post.ts           # tipado de Post / NewPost
└── App.vue                # orquesta los componentes y el fetch inicial
```

## Requisitos

- Node.js
- El backend corriendo (API REST + Postgres/MySQL) — ver su propio repo/README

## Configuración

Copia `.env.example` a `.env` y ajusta la URL del backend:

```bash
cp .env.example .env
```

```
VITE_API_URL=http://localhost:3000
```

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Otros comandos

```bash
npm run build       # build de producción (con type-check)
npm run test:unit   # tests unitarios (Vitest)
npm run lint        # oxlint + eslint
npm run format      # prettier
```

## Uso de IA

Se utilizó IA (Claude) como asistente durante el desarrollo para guiar decisiones de arquitectura (estructura de carpetas, integración de Pinia/PrimeVue), resolver conflictos de dependencias del scaffold inicial y hacer debugging puntual (CORS, tipado, alineación de UI).
