
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  const { t } = useLanguage();
  
  const educations = [
    {
      id: 'edu1',
      institution: t('education.edu1.institution'),
      degree: t('education.edu1.degree'),
      period: t('education.edu1.period')
    },
    {
      id: 'edu2',
      institution: t('education.edu2.institution'),
      degree: t('education.edu2.degree'),
      period: t('education.edu2.period')
    },
    {
      id: 'edu3',
      institution: t('education.edu3.institution'),
      degree: t('education.edu3.degree'),
      period: t('education.edu3.period')
    }
  ];
  
  return (
    <section 
      id="educacion" 
      className="py-20 relative bg-secondary/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          {t('education.title')}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-primary rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div 
              key={edu.id}
              className="glass-card hover-card rounded-xl p-6 transform transition-all hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-lavender/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-lavender" />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">{edu.institution}</h3>
              <p className="text-foreground/80 mb-3">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="hidden md:block absolute -right-24 bottom-0 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-light-lavender/20 rounded-blob transform rotate-45 animate-blob" style={{ animationDuration: '30s' }}></div>
    </section>
  );
};

export default EducationSection;
