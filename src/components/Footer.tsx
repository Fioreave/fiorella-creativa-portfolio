
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:fiorella.avegliano@gmail.com'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: '#'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: '#'
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: '#'
    }
  ];
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lavender to-purple-600">
              Fiorella
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-lavender/10 hover:bg-lavender/20 text-foreground hover:text-lavender transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Fiorella Avegliano. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
