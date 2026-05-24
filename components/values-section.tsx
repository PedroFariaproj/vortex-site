'use client';

import { Zap, Rocket, Palette, TrendingUp, Lightbulb, Handshake } from 'lucide-react';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Foco em Resultado',
    description: 'Seu site precisa vender, não só existir.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Performance e Conversão',
    description: 'Aumentamos a taxa de conversão e maximizamos sua performance online.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Design Estratégico',
    description: 'Cada detalhe é pensado para gerar resultados e atrair seu público.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Inovação Constante',
    description: 'Usamos as mais novas e eficazes tecnologias para manter seu site à frente.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Compromisso com o Cliente',
    description: 'Nosso sucesso está diretamente ligado ao seu. Estamos juntos nessa jornada.',
  },
];

export default function ValuesSection() {
  return (
    <section id="valores" className="py-24 relative overflow-hidden">
      <div className="container-vortex relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Nossos Valores</h2>
          <p className="section-subtitle">O que nos diferencia no mercado</p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-base group"
            >
              {/* Icon Container */}
              <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-cyan-400/10 to-purple-500/10 group-hover:from-cyan-400/20 group-hover:to-purple-500/20 transition-colors">
                <div className="text-cyan-400 group-hover:text-purple-400 transition-colors">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                {value.title}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
