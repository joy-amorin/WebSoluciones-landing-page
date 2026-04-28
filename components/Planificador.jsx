"use client"
import Image from "next/image"
import { useState } from "react"

export default function Planner() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-[#d4d4d4] border-y border-black/10 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-12 max-w-xl">
          <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-medium tracking-widest uppercase px-4 py-[5px] rounded-full mb-4">
            Recurso gratuito
          </span>

          <h2 className="text-4xl font-extrabold tracking-tighter text-[#111] mb-4">
            Organizá tu semana con foco y avanzá en tu negocio
          </h2>

          <p className="text-[15px] text-[#333] leading-relaxed">
            Un planificador simple para definir prioridades, ordenar tareas y enfocarte en lo que realmente hace avanzar tu negocio.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* TEXT */}
          <div>

            {/* RECTÁNGULOS */}
            <div>
              <div className="bg-white/40 border border-emerald-500/70 rounded-xl mb-2 p-4">
                <p className="text-[13px] text-[#333] leading-relaxed">
                  ✔ Definí tus prioridades de la semana
                </p>
              </div>

              <div className="bg-white/40 border border-emerald-500/70 rounded-xl mb-2 p-4">
                <p className="text-[13px] text-[#333] leading-relaxed">
                  ✔ Convertí objetivos en acciones concretas
                </p>
              </div>

              <div className="bg-white/40 border border-emerald-500/70 rounded-xl p-4">
                <p className="text-[13px] text-[#333] leading-relaxed">
                  ✔ Evitá dispersarte y ganar foco
                </p>
              </div>
            </div>

            {/* BOTÓN */}
            <div className="mt-6">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-[1px]"
              >
                Descargar gratis
              </button>
            </div>

          </div>

          {/* MOCKUP */}
          <div className="flex justify-center">
            <div className="inline-block shadow-[8px_12px_15px_rgba(0,0,0,0.25)] rounded-lg">
              <Image
                src="/planner-mockup.png"
                alt="Planificador semanal"
                width={300}
                height={420}
                className="object-contain rounded-lg"
              />
            </div>
          </div>

        </div>

      </div>

      {/* MODAL */}
          {open && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="bg-[#d4d4d4] border border-black rounded-xl w-full max-w-sm p-6">

              <h3 className="text-lg font-extrabold text-[#111] mb-2 tracking-tight">
                Recibí tu planificador semanal
              </h3>

              <p className="text-[13px] text-[#333] mb-5 leading-relaxed">
                Ingresá tu email para descargarlo gratis
              </p>

              <form
                onSubmit={ async (e) => {
                  e.preventDefault()

                  const email = e.target.email.value

                  await fetch("https://script.google.com/macros/s/AKfycbxmFC0yKWU8deCrqX8GE0PlsMG1OgxQMT55RmYgjqESMqWLxD0RmOK4IlpsTHsTgTKY/exec", {
                    method: "POST",
                    body: JSON.stringify({ email }),
                  })

                  const link = document.createElement("a")
                  link.href = "/planificador-semanal.pdf"
                  link.download = "planificador-semanal.pdf"
                  link.click()

                  setOpen(false)
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Tu email"
                  className="w-full bg-white/60 border border-emerald-500/40 rounded-lg px-3 py-2 text-sm text-[#111] placeholder:text-[#666] focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  Descargar
                </button>
              </form>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-[11px] text-[#555]"
              >
                Cerrar
              </button>

            </div>

          </div>
        )}
  
    </section>
  )
}