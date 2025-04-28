
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex flex-col items-center justify-center pb-10 pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-6 text-primary animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {t('hero.description')}
          </p>
          <Button 
            size="lg" 
            className="rounded-full font-medium animate-fade-in"
            style={{ animationDelay: '600ms' }}
            onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-lavender rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-light-lavender rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" style={{ animationDelay: '8s' }}></div>
      
      {/* 3D objects */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 transform rotate-45 animate-float shadow-xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 rounded-lg transform -rotate-12 animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full animate-float shadow-md" style={{ animationDelay: '3s' }}></div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;
