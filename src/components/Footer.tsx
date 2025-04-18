import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-montserrat font-light tracking-widest mb-6">
              Dra <span className="text-golden">Ana Paula</span>
            </h2>
            <p className="text-neutral-400 mb-6">
              Tecnologia avançada para estética facial com resultados excepcionais e personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-golden transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-golden transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-golden transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-golden transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-medium text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-neutral-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="/#services" className="text-neutral-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="/#testimonials" className="text-neutral-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="/#contact" className="text-neutral-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-medium text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-neutral-400 hover:text-white transition-colors">Rejuvenescimento Facial</a></li>
              <li><a href="/#services" className="text-neutral-400 hover:text-white transition-colors">Harmonização Facial</a></li>
              <li><a href="/#services" className="text-neutral-400 hover:text-white transition-colors">Tratamentos para Pele</a></li>
              <li><a href="/#services" className="text-neutral-400 hover:text-white transition-colors">Cursos e Formação</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-medium text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-neutral-400">
              <li>+55 (11) 99999-9999</li>
              <li>contato@facetech.com.br</li>
              <li>Av. Paulista, 1000 - Bela Vista<br />São Paulo, SP - 01310-100</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} DRA ANA PAULA. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </a>
            <button 
              onClick={scrollToTop} 
              className="text-neutral-400 hover:text-golden transition-colors flex items-center gap-1 text-sm"
            >
              Voltar ao topo <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
