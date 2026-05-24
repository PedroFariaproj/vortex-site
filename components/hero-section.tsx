'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.1),rgba(168,85,247,0.05))]" />

      <div className="container-vortex relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 w-fit">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 font-medium">Agência de Design & Desenvolvimento</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-white">Transforme sua </span>
                <span className="text-gradient">Presença Digital</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Criamos sites que vendem, não só existem. Com design estratégico, performance excepcional e foco em conversão, levamos seu negócio para o próximo nível.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary inline-flex items-center justify-center gap-2">
                Começar Projeto
                <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn-secondary">
                Ver Portfólio
              </a>
            </div>

            {/* Social Proof */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>+150 projetos entregues</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>+50 empresas em crescimento</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Equipe especializada desde 2020</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full hidden lg:block">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/vortex_sites_logo.jpeg"
                  alt="Vórtex Sites Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 pointer-events-none" />
            </div>

            {/* Floating Card - Stats */}
            <div className="absolute -bottom-12 -left-12 card-base w-64 backdrop-blur-xl">
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold text-gradient">98%</div>
                  <p className="text-xs text-slate-400">Taxa de Satisfação</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">3x</div>
                  <p className="text-xs text-slate-400">Mais Conversões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
