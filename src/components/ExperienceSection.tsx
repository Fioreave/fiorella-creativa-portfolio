
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 'job1',
      company: t('experience.job1.company'),
      position: t('experience.job1.position'),
      period: t('experience.job1.period'),
      description: t('experience.job1.description'),
      isCurrent: true
    },
    {
      id: 'job2',
      company: t('experience.job2.company'),
      position: t('experience.job2.position'),
      period: t('experience.job2.period'),
      description: t('experience.job2.description'),
      isCurrent: true
    },
    {
      id: 'job3',
      company: t('experience.job3.company'),
      position: t('experience.job3.position'),
      period: t('experience.job3.period'),
      description: t('experience.job3.description'),
      isCurrent: false
    }
  ];
  
  return (
    <section 
      id="experiencia" 
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          {t('experience.title')}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-primary rounded-full"></span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-lavender via-purple-500 to-purple-300"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-lavender shadow-lg z-10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-lavender" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                  <div className="glass-card hover-card rounded-xl p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-display font-semibold">{exp.company}</h3>
                      <div className="flex flex-wrap items-center mt-1 gap-2">
                        <span className="text-muted-foreground">{exp.position}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      {exp.isCurrent && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-lavender/20 text-lavender font-medium">
                          {t('experience.current')}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 left-0 w-40 h-40 bg-lavender rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default ExperienceSection;
