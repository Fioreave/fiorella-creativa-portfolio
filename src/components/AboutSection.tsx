
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { CalendarDays, Mail, Phone, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="sobre-mi" 
      className="py-20 relative overflow-hidden bg-secondary/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          {t('about.title')}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-primary rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-6">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-lavender to-purple-600 rounded-3xl transform -rotate-6 opacity-30"></div>
              <div className="absolute inset-0 glass-card rounded-3xl transform rotate-3 opacity-60"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-300 opacity-20"></div>
                <img 
                  src="/lovable-uploads/ca0f76f4-8e2b-497b-9ab8-16aa6be655ea.png" 
                  alt="Fiorella" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="glass-card rounded-3xl p-8 hover-card">
              <p className="text-lg leading-relaxed mb-8">
                {t('about.specialization')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-lavender/20 p-3 rounded-full">
                    <CalendarDays className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('about.birthday')}</p>
                    <p className="font-medium">{t('about.birthdayValue')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-lavender/20 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
                    <p className="font-medium">+376 368 253</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-lavender/20 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                    <p className="font-medium">fiorella.avegliano@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-lavender/20 p-3 rounded-full">
                    <Globe className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('contact.behance')}</p>
                    <a href="https://behance.net/fiorellaveglia" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                      behance.net/fiorellaveglia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-radial from-purple-300/20 to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-radial from-lavender/10 to-transparent"></div>
    </section>
  );
};

export default AboutSection;
