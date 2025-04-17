
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-golden font-montserrat tracking-widest text-sm mb-3">CONTATO</h5>
          <h2 className="font-montserrat font-extralight mb-4">
            Pronto para <span className="text-golden font-light">Transformar</span> sua Beleza?
          </h2>
          <p className="text-muted-foreground">
            Entre em contato conosco para agendar sua avaliação personalizada ou 
            esclarecer qualquer dúvida sobre nossos serviços.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-montserrat text-xl mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-golden"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-golden"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-golden"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">Serviço de interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-golden"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="rejuvenescimento">Rejuvenescimento Facial</option>
                  <option value="pele">Tratamentos para Pele</option>
                  <option value="harmonizacao">Harmonização Facial</option>
                  <option value="avancados">Cuidados Avançados</option>
                  <option value="corporais">Tratamentos Corporais</option>
                  <option value="cursos">Cursos e Treinamentos</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-golden resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-primary w-full flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : (
                  <>
                    Enviar Mensagem <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="font-montserrat text-xl mb-6">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-beige-50 p-3 rounded-full">
                    <Phone size={20} className="text-golden" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefone</p>
                    <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-beige-50 p-3 rounded-full">
                    <Mail size={20} className="text-golden" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-mail</p>
                    <p className="text-muted-foreground">contato@facetech.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-beige-50 p-3 rounded-full">
                    <MapPin size={20} className="text-golden" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Endereço</p>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo, SP - 01310-100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-montserrat text-xl mb-6">Horário de Funcionamento</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-medium">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos e Feriados</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-secondary w-full flex items-center justify-center gap-2"
                >
                  Agendar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
