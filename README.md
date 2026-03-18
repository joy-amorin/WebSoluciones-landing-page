# Web Soluciones — Landing Page

Landing page profesional con **Next.js 14 + React + TypeScript + Tailwind CSS v3**.
Sin un solo archivo `.module.css` — 100% Tailwind.

## Estructura

```
web-soluciones/
├── app/
│   ├── globals.css       # Tailwind directives + Google Fonts + base styles
│   ├── layout.tsx        # Root layout con metadata SEO
│   └── page.tsx          # Página principal (ensambla secciones)
├── components/
│   ├── Navbar.tsx        # Sticky nav + hamburger mobile
│   ├── Hero.tsx          # Hero con browser mockup
│   ├── Problema.tsx      # Sección problema con stats
│   ├── Beneficios.tsx    # Grid de 5 beneficios
│   ├── Planes.tsx        # 2 planes de servicio
│   ├── Portfolio.tsx     # 3 casos de portfolio
│   ├── Proceso.tsx       # 4 pasos del proceso
│   ├── Contacto.tsx      # Formulario de contacto
│   └── Footer.tsx        # Footer con links y redes
├── tailwind.config.js    # Design tokens (colores, fuentes, animaciones)
├── postcss.config.js
└── package.json
```

## Instalación

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Personalización

### Colores y fuentes
Todo en `tailwind.config.js`:
```js
colors: {
  green: { 500: '#1D9E75', ... },  // color principal
  dark:  { base: '#0a0f0d', ... }, // fondos
}
fontFamily: {
  display: ['Syne', ...],   // títulos
  body:    ['DM Sans', ...], // cuerpo
}
```

### Contenido por sección
Los datos de cada sección están como arrays al inicio del componente:
- **Planes**     → `components/Planes.tsx`     → array `planes[]`
- **Portfolio**  → `components/Portfolio.tsx`  → array `projects[]`
- **Beneficios** → `components/Beneficios.tsx` → array `benefits[]`
- **Proceso**    → `components/Proceso.tsx`    → array `steps[]`

### Email y WhatsApp
Reemplazá en `Contacto.tsx` y `Footer.tsx`:
```tsx
href="mailto:TU_EMAIL"
href="https://wa.me/TUNUMERO"  // sin + ni espacios, ej: 59899123456
```

### Formulario
`Contacto.tsx` tiene el `handleSubmit` listo para conectar.
Opciones recomendadas (sin backend):

**Formspree** (más simple):
```tsx
const res = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**EmailJS**:
```bash
npm install @emailjs/browser
```
```tsx
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

## Deploy

### Vercel (recomendado)
```bash
npx vercel
```
O conectá el repo en [vercel.com](https://vercel.com) para CI/CD automático.

### Netlify
```bash
npm run build
# subí la carpeta .next a Netlify
```
