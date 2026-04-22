'use client';

import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="container-vortex relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title mb-4">Vamos Conversar?</h2>
              <p className="section-subtitle">
                Transformar sua presença digital começa com uma conversa. Conta-nos sobre seu projeto e vamos traçar a melhor estratégia juntos.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-slate-400">contato@vortex.com</p>
                  <p className="text-slate-500 text-sm">Responderemos em até 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Telefone</h4>
                  <p className="text-slate-400">+55 (11) 9999-9999</p>
                  <p className="text-slate-500 text-sm">Seg-Sex, 09:00-18:00</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="pt-6 border-t border-slate-700">
              <p className="text-sm text-slate-400 mb-4 font-medium">Por que nos escolher?</p>
              <ul className="space-y-2">
                {[
                  'Equipe especializada com +10 anos de experiência',
                  'Metodologia comprovada de conversão',
                  'Suporte dedicado do início ao fim',
                  'Resultados mensuráveis e transparentes',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="card-base max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="João Silva"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="joao@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Sua Empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Conte-nos sobre seu projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Descreva seu projeto, objetivos e desafios..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                Seus dados são seguros conosco. Leia nossa{' '}
                <a href="#" className="text-cyan-400 hover:underline">
                  política de privacidade
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
