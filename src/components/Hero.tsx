
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Droplet } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden">
      {/* Background with water-inspired gradient */}
      <div className="absolute inset-0 water-gradient opacity-10 z-0"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-water hover:bg-water/90 text-white">{t('home.hero.cta')}</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
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
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-water italic">"{t('app.tagline')}"</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
