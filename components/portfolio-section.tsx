'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: ProjectCard[] = [
  {
    title: 'E-commerce Premium',
    description: 'Plataforma de vendas com checkout otimizado e taxa de conversão 300% acima da média.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e371?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Stripe', 'Analytics'],
    link: '#',
  },
  {
    title: 'Saas Platform',
    description: 'Sistema de gerenciamento em nuvem com autenticação avançada e performance excepcional.',
    image: 'https://images.unsplash.com/photo-1553518810-d2c1c4cf0fcd?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Agency Website',
    description: 'Site institucional com design inovador e storytelling visual impactante.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['Framer Motion', 'Tailwind', 'SEO'],
    link: '#',
  },
  {
    title: 'Mobile App',
    description: 'Aplicativo nativo com interface intuitiva e experiência de usuário exemplar.',
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase', 'Design'],
    link: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container-vortex relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Portfólio</h2>
          <p className="section-subtitle">Projetos que geraram resultados reais</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-base overflow-hidden flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4 flex-grow text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <ExternalLink size={16} />
                    Ver Projeto
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700 transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
