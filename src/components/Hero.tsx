
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Droplet } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Add animation classes after component mounts
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const cta = document.querySelector('.hero-cta');
    const heroImage = document.querySelector('.hero-image');

    if (title) title.classList.add('animate-fade-in');
    if (subtitle) {
      subtitle.classList.add('animate-fade-in');
      subtitle.classList.add('delay-200');
    }
    if (cta) {
      cta.classList.add('animate-fade-in');
      cta.classList.add('delay-400');
    }
    if (heroImage) {
      heroImage.classList.add('animate-fade-in');
      heroImage.classList.add('delay-300');
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background with water-inspired gradient */}
      <div className="absolute inset-0 water-gradient opacity-10 z-0 dark:opacity-5"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="hero-title opacity-0 text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              {t('home.hero.title')}
            </h1>
            <p className="hero-subtitle opacity-0 text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0 transition-colors duration-300">
              {t('home.hero.subtitle')}
            </p>
            <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-water hover:bg-water/90 text-white hover-scale transition-transform duration-300">
                {t('home.hero.cta')}
              </Button>
              <Button variant="outline" className="hover-scale transition-transform duration-300">
                {t('home.hero.learnMore')}
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="hero-image opacity-0 relative">
              {/* Animated water drop illustration */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-water/10 rounded-full flex items-center justify-center">
                <div className="animate-pulse w-48 h-48 md:w-64 md:h-64 bg-water/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-water/30 rounded-full flex items-center justify-center">
                    <Droplet size={64} className="text-water animate-flow" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 left-0 w-8 h-8 bg-water/20 rounded-full animate-droplet"></div>
              <div className="absolute top-1/2 right-0 w-6 h-6 bg-water/20 rounded-full animate-droplet" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-water/20 rounded-full animate-droplet" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="mt-16 text-center animate-fade-in delay-500">
          <p className="text-xl md:text-2xl text-water dark:text-water-light italic">{t('app.tagline')}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
