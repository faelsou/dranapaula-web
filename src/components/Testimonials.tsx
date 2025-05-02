
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rafael Souza',
    role: 'Cliente B2C',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    content: 'Minha experiência com o FaceTech foi incrível. Os resultados do tratamento com ácido hialurônico superaram minhas expectativas. Minha pele está radiante e com um aspecto muito mais saudável.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Joshua Oliveira Souza',
    role: 'Dermatologista Parceiro',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    content: 'Como profissional parceiro, posso atestar a qualidade dos equipamentos e produtos utilizados pelo FaceTech. A tecnologia de ponta faz toda diferença nos resultados que conseguimos oferecer aos pacientes.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dra Ana Paula',
    role: 'Esteticista',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    content: 'Os treinamentos oferecidos pela FaceTech transformaram minha carreira. A expertise compartilhada e as técnicas avançadas me permitiram oferecer um serviço premium aos meus clientes.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-golden font-montserrat tracking-widest text-sm mb-3">DEPOIMENTOS</h5>
          <h2 className="font-montserrat font-extralight mb-4">
            O Que Nossos <span className="text-golden font-light">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground">
            Experiências reais de clientes e profissionais parceiros que confiam em nossa 
            expertise e tecnologia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-50 p-8 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} size={16} className="text-golden fill-golden" />
                  ))}
                </div>
              </div>
              <p className="italic text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-5">
            Junte-se a mais de 10.000 clientes satisfeitos
          </p>
          <a href="/#contact" className="button-secondary">
            Agende sua Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
