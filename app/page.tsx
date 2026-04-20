"use client";

import { motion } from "framer-motion";


export default function VortexSite() {
  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-x-hidden">
      

      {/* NAVBAR */}
<header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    
    <a href="#home">
  <img 
    src="/images/letra.png"
    alt="Vórtex Sites"
    className="h-10 w-auto cursor-pointer"
  />
</a>

    <nav className="hidden md:flex gap-6 text-sm text-gray-300">
      <a href="#home" className="hover:text-white">Início</a>
      <a href="#sobre" className="hover:text-white">Sobre</a>
      <a href="#servicos" className="hover:text-white">Serviços</a>
      <a href="#contato" className="hover:text-white">Contato</a>
    </nav>
  </div>
</header>

      {/* HERO */}
<section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24">
  
  <img
  src="/images/logo1.jpeg"
  alt="Vortex Sites"
  className="w-140 md:w-180 mb-6 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
/>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-bold"
  >
    Transformamos visitantes <span className="text-cyan-400">em clientes</span>
  </motion.h1>

  <p className="mt-6 text-gray-300 max-w-xl">
    Sites modernos, rápidos e estratégicos para empresas que querem crescer.
  </p>

  <a
    href="#contato"
    className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-cyan-300 transition"
  >
    Solicitar orçamento
  </a>
</section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Quem somos</h2>
        <p className="mt-6 text-gray-400">
          A Vórtex é uma empresa focada em criar sites que geram resultado.
          Mais do que design, desenvolvemos estratégias digitais pensadas para atrair,
           engajar e converter clientes. Cada detalhe é planejado para transformar visitantes
            em oportunidades reais de negócio.
          Nosso foco é simples: fazer seu site trabalhar para você.
        </p>
      </section>

      {/* MISSÃO VISÃO VALORES */}
<section className="py-20 px-6 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  {[
    {
      title: "Missão",
      text: "Criar soluções digitais inteligentes que conectam negócios ao crescimento, através de experiências online estratégicas, performáticas e orientadas à conversão.",
    },
    {
      title: "Visão",
      text: "Ser líder em inovação digital, criando experiências online que conectam empresas ao futuro, com tecnologia, estratégia e performance.",
    },
    {
      title: "Valores",
      isList: true,
      items: [
        "Foco em resultado: Tudo o que criamos tem um objetivo claro: gerar crescimento, leads e vendas.",
        "Estratégia acima da estética: Design importa, mas a estratégia vem primeiro.",
        "Simplicidade que converte: O simples bem feito vende mais.",
        "Compromisso com performance: Sites rápidos e responsivos.",
        "Evolução constante: Estamos sempre evoluindo com o digital.",
        "Parceria com o cliente: Crescemos junto com quem confia no nosso trabalho.",
      ],
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-[#0b0f1a] p-6 rounded-2xl transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,212,255,0.08)]"
    >
      {/* Linha azul premium */}
      <div className="w-10 h-1 bg-cyan-400 mb-4 rounded-full"></div>

      <h2 className="text-xl font-bold tracking-wide mb-4">
        {item.title}
      </h2>

      {item.isList ? (
        <ul className="space-y-3">
          {item.items.map((val, i) => {
            const [titulo, descricao] = val.split(":");
            return (
              <li
                key={i}
                className="group transition-all duration-300 hover:translate-x-2 hover:text-gray-200"
              >
                <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition">
                  • {titulo}:
                </span>{" "}
                <span className="text-gray-400">{descricao}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-400 leading-relaxed">{item.text}</p>
      )}
    </div>
  ))}
</section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que fazemos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Sites Institucionais", "Landing Pages", "E-commerce"].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-400">
                Projetos modernos com foco total em conversão e performance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos recentes</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Clínica Odonto", type: "Institucional", img: "/images/site1.png" },
            { name: "Jadoo", type: "Landing Page", img: "/images/site2.png" },
            { name: "Doces da Mari", type: "e-comerce", img: "/images/site3.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b1220]"
            >

              {/* IMAGEM DO SITE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-44 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS (VERSÃO PREMIUM RESTAURADA) */}
      <section className="py-20 px-6 text-center overflow-hidden relative">
        <h2 className="text-3xl font-bold mb-10">O que dizem nossos clientes</h2>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll w-max hover:[animation-play-state:paused]">

            {[0,1].map((loop) => (
              <div key={loop} className="flex gap-8">
                {[
                  { text: "Hoje em dia muitos pacientes me acham, por cauisa do site, valeu o investimento", name: "Bruna Teixeira - Clínica Odonto" },
                  { text: "Facilitou meu jeito de vender, hoje em dia não perco vendas.", name: "Mariana - Doces da Mari" },
                  { text: "It was worth every penny. Vortex guided us and helped us identify our problem, and best of all, helped us solve it. Thank you so much!", name: " S. Logan - Jadoo" },
                  { text: "Profissionalismo incrível, me explicou tudo certinho, me deixou super tranquila.", name: "Fernanda - Studio Fit" },
                  { text: "Hoje passo mais confiança.", name: "Ricardo - Advogados" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-[280px] shrink-0 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur hover:scale-105 transition duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-black font-bold">
                        {item.name.charAt(0)}
                      </div>

                      <div className="text-left">
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                        <p className="text-xs text-green-400">✔ Verificado</p>
                      </div>
                    </div>

                    <div className="text-yellow-400 mb-2">★★★★★</div>

                    <p className="text-gray-300 text-sm">"{item.text}"</p>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

        {/* FADE LATERAL PREMIUM */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent"></div>
      </section>

      {/* CTA FINAL */}
<section id="contato" className="py-20 text-center">
  <h2 className="text-3xl font-bold">Pronto para crescer?</h2>
  <p className="text-gray-400 mt-4">
    Vamos levar seu negócio para o próximo nível.
  </p>

  <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
    
    <a
      href="https://wa.me/5511994576716"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-500 hover:bg-purple-400 px-8 py-4 rounded-2xl text-white font-semibold transition"
    >
      Falar no WhatsApp
    </a>

    <a
      href="https://instagram.com/vortex.websites"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black transition"
    >
      Ver Instagram
    </a>

  </div>
</section>

      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href="https://wa.me/5511994576716"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 px-5 py-3 rounded-full shadow-lg text-white font-semibold flex items-center gap-2"
      >
        💬 WhatsApp
      </a>

          {/* FOOTER */}
      <footer className="text-center py-8 text-gray-400 text-sm border-t border-white/10">
        <p>© 2026 Vórtex Sites — Todos os direitos reservados</p>
        <p className="mt-2">pedropfariaa@gmail.com</p>

      </footer>

    </div>
  );
}
