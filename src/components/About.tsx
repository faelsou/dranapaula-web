
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Profissional especialista" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-8 gold-shimmer text-white p-8 rounded-lg">
              <p className="text-2xl font-montserrat font-light mb-2">10+ anos</p>
              <p className="text-sm">de excelência em estética facial</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-golden font-montserrat tracking-widest text-sm">SOBRE NÓS</h5>
            <h2 className="font-montserrat font-extralight">
              Tecnologia avançada para resultados <span className="text-golden font-light">naturais</span>
            </h2>
            <p className="text-muted-foreground">
              Somos um centro de estética facial de alta performance dedicado a oferecer tratamentos 
              personalizados que ressaltam sua beleza natural. Combinamos tecnologia de ponta, 
              profissionais altamente capacitados e protocolos exclusivos para garantir resultados 
              excepcionais.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="border-t-2 border-golden pt-4">
                <h3 className="font-montserrat text-xl mb-2">Ciência</h3>
                <p className="text-muted-foreground text-sm">
                  Base científica em todos os nossos protocolos e procedimentos.
                </p>
              </div>
              
              <div className="border-t-2 border-golden pt-4">
                <h3 className="font-montserrat text-xl mb-2">Personalização</h3>
                <p className="text-muted-foreground text-sm">
                  Cada cliente recebe um plano de tratamento único e adequado.
                </p>
              </div>
              
              <div className="border-t-2 border-golden pt-4">
                <h3 className="font-montserrat text-xl mb-2">Excelência</h3>
                <p className="text-muted-foreground text-sm">
                  Compromisso com os mais altos padrões de qualidade e atendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
