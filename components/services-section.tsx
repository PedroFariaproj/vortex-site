'use client';

import { Code2, Smartphone, BarChart3, Shield } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceCard[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações modernas com tecnologias de ponta',
    features: ['React & Next.js', 'Performance otimizada', 'SEO nativo'],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Design & UX',
    description: 'Interfaces intuitivas que convertem visitantes em clientes',
    features: ['Design estratégico', 'User Research', 'Prototipos interativos'],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Otimização & Analytics',
    description: 'Maximize resultados com dados e insights profundos',
    features: ['Google Analytics', 'Heatmaps', 'Testes A/B'],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Responsivo & Mobile',
    description: 'Experiência perfeita em todos os dispositivos',
    features: ['Mobile First', 'Progressive Web Apps', 'Cross-browser'],
  },
];

import { Palette } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="container-vortex relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas para sua presença digital</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-base group flex flex-col h-full"
            >
              {/* Icon */}
              <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-cyan-400/10 to-purple-500/10 group-hover:from-cyan-400/20 group-hover:to-purple-500/20 transition-colors w-fit">
                <div className="text-cyan-400 group-hover:text-purple-400 transition-colors">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors mb-4 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-xs text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
