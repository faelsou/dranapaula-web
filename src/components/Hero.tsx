
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-neutral-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-beige-50 -skew-x-12 transform origin-top-right z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h5 className="text-golden font-montserrat tracking-widest text-sm">ESTÉTICA FACIAL AVANÇADA</h5>
            <h1 className="font-montserrat font-extralight leading-tight">
              Transformamos a Sua Beleza com <span className="text-golden font-light">Tecnologia e Precisão</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Tratamentos personalizados que combinam ciência avançada e tecnologia de ponta para resultados 
              naturais e duradouros. Descubra o futuro da estética facial.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/#contact" className="button-primary flex items-center gap-2">
                Agende Sua Avaliação <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="button-secondary">
                WhatsApp Direto
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="aspect-square rounded-full bg-beige-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603384699007-9897527d0f48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Tratamento facial de alta tecnologia" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-beige-50">
                  <span className="text-golden font-montserrat font-medium">100%</span>
                </div>
                <div>
                  <p className="font-medium">Satisfação dos clientes</p>
                  <p className="text-sm text-muted-foreground">Baseado em +5000 tratamentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
