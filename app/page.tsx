import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Problema   from '@/components/Problema'
import Beneficios from '@/components/Beneficios'
import Planes     from '@/components/Planes'
import ServiciosAdicionales from '@/components/ServiciosAdicionales'
import Portfolio  from '@/components/Portfolio'
import Proceso    from '@/components/Proceso'
import Contacto   from '@/components/Contacto'
import Footer     from '@/components/Footer'
import Planificador from '@/components/Planificador'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
         <Planificador />
        <Problema />
        <Beneficios />
        <Planes />
        <ServiciosAdicionales />
        <Portfolio />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
