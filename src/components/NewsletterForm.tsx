
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-beige-50">
      <div className="section-container">
        <div className="bg-white p-10 rounded-lg shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-light text-2xl mb-3">
              Assine Nossa <span className="text-golden">Newsletter</span>
            </h3>
            <p className="text-muted-foreground">
              Receba dicas exclusivas, novidades sobre tratamentos e ofertas especiais.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-golden"
            />
            <button 
              type="submit" 
              className="button-primary flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : (
                <>
                  Inscrever-se <Send size={16} />
                </>
              )}
            </button>
          </form>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            Ao se inscrever, você concorda com nossa política de privacidade.
            Não enviamos spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
