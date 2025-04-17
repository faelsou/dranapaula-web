
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  treatments: {
    name: string;
    description: string;
  }[];
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('rejuvenescimento');
  const [activeTreatment, setActiveTreatment] = useState<string | null>(null);
  
  const serviceCategories: Service[] = [
    {
      id: 'rejuvenescimento',
      title: 'Rejuvenescimento Facial',
      description: 'Rejuvenesça sua pele com nossos tratamentos avançados que combatem sinais de envelhecimento.',
      treatments: [
        {
          name: 'Toxina Botulínica (Botox)',
          description: 'Tratamento que suaviza rugas de expressão e previne o surgimento de novas linhas.',
        },
        {
          name: 'Preenchimento com Ácido Hialurônico',
          description: 'Restaura o volume facial e hidrata profundamente a pele para um aspecto mais jovial.',
        },
        {
          name: 'Bioestimuladores de Colágeno',
          description: 'Estimula a produção natural de colágeno, melhorando a firmeza e elasticidade da pele.',
        },
        {
          name: 'Ultrassom Microfocado',
          description: 'Lifting sem cirurgia que promove tensionamento e contorno facial definido.',
        },
        {
          name: 'Fios de PDO',
          description: 'Sustentação imediata e estímulo de colágeno para resultados progressivos.',
        },
      ],
    },
    {
      id: 'pele',
      title: 'Tratamentos para a Pele',
      description: 'Cuide da saúde e aparência da sua pele com nossos procedimentos especializados.',
      treatments: [
        {
          name: 'Limpeza de Pele Profunda',
          description: 'Remoção de impurezas e células mortas para uma pele renovada e iluminada.',
        },
        {
          name: 'Peeling Químico e Mecânico',
          description: 'Renovação celular para tratar manchas, acne e textura irregular da pele.',
        },
        {
          name: 'Laser CO₂ Fracionado',
          description: 'Tratamento avançado para rejuvenescimento e redução de cicatrizes.',
        },
        {
          name: 'Microagulhamento com Drug Delivery',
          description: 'Estimula a renovação da pele com a aplicação direcionada de ativos potentes.',
        },
        {
          name: 'Terapia Fotodinâmica',
          description: 'Tratamento eficaz para manchas e acne através da combinação de luz e fotossensibilizadores.',
        },
      ],
    },
    {
      id: 'harmonizacao',
      title: 'Harmonização Facial',
      description: 'Equilíbrio e simetria para realçar sua beleza natural com procedimentos personalizados.',
      treatments: [
        {
          name: 'Contorno Mandibular',
          description: 'Define o contorno do rosto para um perfil mais harmônico e equilibrado.',
        },
        {
          name: 'Rinomodelação',
          description: 'Correção de irregularidades no nariz sem necessidade de cirurgia.',
        },
        {
          name: 'Preenchimento Labial',
          description: 'Destaca o volume e contorno dos lábios para um sorriso mais jovem e atraente.',
        },
        {
          name: 'Lipo de Papada Enzimática',
          description: 'Redução da gordura localizada na região do queixo e definição do contorno.',
        },
        {
          name: 'Correção de Assimetrias',
          description: 'Técnicas avançadas para equilibrar assimetrias faciais naturais.',
        },
      ],
    },
    {
      id: 'avancados',
      title: 'Cuidados Avançados',
      description: 'Tratamentos de última geração para resultados superiores e duradouros.',
      treatments: [
        {
          name: 'Skinbooster',
          description: 'Hidratação profunda que restaura a luminosidade e firmeza da pele.',
        },
        {
          name: 'Mesoterapia',
          description: 'Aplicação de coquetéis vitamínicos para nutrição intensiva da pele.',
        },
        {
          name: 'Detox Facial',
          description: 'Desintoxicação completa para uma pele renovada e saudável.',
        },
        {
          name: 'Consulta Dermatológica Personalizada',
          description: 'Avaliação completa e plano de tratamento adaptado às suas necessidades específicas.',
        },
      ],
    },
    {
      id: 'corporais',
      title: 'Tratamentos Corporais',
      description: 'Foco em rosto e pescoço com técnicas inovadoras para modelar e definir.',
      treatments: [
        {
          name: 'Criolipólise de Papada',
          description: 'Redução de gordura localizada na região do pescoço através do congelamento das células.',
        },
        {
          name: 'Radiofrequência para Flacidez',
          description: 'Estimula colágeno para diminuir a flacidez em áreas específicas.',
        },
        {
          name: 'Lasers para Remoção de Manchas',
          description: 'Tecnologia avançada para tratar manchas e revitalizar a pele.',
        },
      ],
    },
  ];
  
  const activeService = serviceCategories.find(service => service.id === activeCategory);
  const activeTreatmentDetails = activeService?.treatments.find(
    treatment => treatment.name === activeTreatment
  );

  return (
    <section id="services" className="py-24 bg-beige-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-golden font-montserrat tracking-widest text-sm mb-3">NOSSOS SERVIÇOS</h5>
          <h2 className="font-montserrat font-extralight mb-4">
            Serviços <span className="text-golden font-light">Exclusivos</span> para sua Beleza
          </h2>
          <p className="text-muted-foreground">
            Conheça nossa gama completa de tratamentos faciais avançados, desenvolvidos para 
            atender necessidades específicas com resultados visíveis.
          </p>
        </div>
        
        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveTreatment(null);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category.id 
                  ? 'bg-golden text-white' 
                  : 'bg-white text-foreground hover:bg-beige-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-montserrat text-xl mb-4">{activeService?.title}</h3>
            <p className="text-muted-foreground mb-6">{activeService?.description}</p>
            
            <ul className="space-y-2">
              {activeService?.treatments.map((treatment) => (
                <li key={treatment.name}>
                  <button
                    onClick={() => setActiveTreatment(treatment.name)}
                    className={`flex items-center justify-between w-full p-3 text-left rounded-md transition-colors ${
                      activeTreatment === treatment.name 
                        ? 'bg-beige-50 text-golden' 
                        : 'hover:bg-neutral-50'
                    }`}
                  >
                    <span>{treatment.name}</span>
                    <ChevronRight size={16} className="text-golden" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            {activeTreatment ? (
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="font-montserrat text-2xl mb-4 text-golden">{activeTreatmentDetails?.name}</h3>
                <p className="text-muted-foreground mb-6">{activeTreatmentDetails?.description}</p>
                
                <div className="mt-8">
                  <h4 className="font-montserrat text-lg mb-4">Benefícios</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-golden/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-golden"></div>
                      </div>
                      <span>Resultados visíveis a partir da primeira sessão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-golden/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-golden"></div>
                      </div>
                      <span>Procedimento minimamente invasivo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-golden/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-golden"></div>
                      </div>
                      <span>Recuperação rápida sem tempo de inatividade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-golden/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-golden"></div>
                      </div>
                      <span>Técnicas exclusivas e personalizadas</span>
                    </li>
                  </ul>
                  
                  <div className="mt-10">
                    <a href="/#contact" className="button-primary">
                      Agende uma Consulta
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm h-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Serviços de estética" 
                    className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
                  />
                  <p className="text-muted-foreground">
                    Selecione um tratamento para ver mais detalhes
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
