
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show toast notification
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu mensaje, te responderé pronto.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-lavender" />,
      title: t('contact.phone'),
      info: '+376 368 253'
    },
    {
      icon: <Mail className="h-5 w-5 text-lavender" />,
      title: t('contact.email'),
      info: 'fiorella.avegliano@gmail.com'
    },
    {
      icon: <Globe className="h-5 w-5 text-lavender" />,
      title: t('contact.behance'),
      info: 'behance.net/fiorellaveglia',
      isLink: true,
      url: 'https://behance.net/fiorellaveglia'
    }
  ];
  
  return (
    <section 
      id="contacto" 
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16 font-display">
          {t('contact.title')}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-primary rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Información de contacto a la izquierda */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-8 relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute top-0 left-0 w-full h-full rounded-blob bg-lavender/20 animate-blob"></div>
                <div className="absolute top-2 left-2 w-full h-full overflow-hidden rounded-blob">
                  <img 
                    src="/lovable-uploads/cf5b7b08-7868-4b5c-bdce-57f79a579643.png" 
                    alt="Fiorella Avegliano" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="glass-card hover-card rounded-xl p-8 w-full mt-6">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  {t('contact.title')}
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-lavender/20 p-3 rounded-full shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.isLink ? (
                          <a 
                            href={info.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.info}
                          </a>
                        ) : (
                          <p className="font-medium">{info.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario a la derecha */}
          <div className="order-1 lg:order-2">
            <div className="glass-card hover-card rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.formName')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.formEmail')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.formMessage')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-lg"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto rounded-full font-display"
                >
                  {t('contact.formSubmit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
