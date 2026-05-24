'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container-vortex">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo_vortex.jpeg"
                  alt="Vórtex Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-gradient">Vórtex</span>
            </div>
            <p className="text-slate-400 text-sm">
              Transformando ideias em experiências digitais extraordinárias.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {['Design Web', 'Desenvolvimento', 'Performance', 'Consultoria'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {['Sobre Nós', 'Blog', 'Carreiras', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">contato@vortex.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © {currentYear} Vórtex Sites. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {[
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 text-slate-400 hover:text-slate-950 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
