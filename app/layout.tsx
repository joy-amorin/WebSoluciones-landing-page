import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Soluciones – Desarrollo web para emprendimientos',
  description: 'Webs modernas, rápidas y optimizadas para que tu negocio tenga presencia profesional y reciba consultas todos los días.',
  keywords: ['desarrollo web', 'páginas web', 'emprendimientos', 'web profesional'],
  openGraph: {
    title: 'Web Soluciones',
    description: 'Tu web profesional, lista para conseguir clientes.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
