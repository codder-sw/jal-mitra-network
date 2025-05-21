
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WaterCrisisStats from '../components/WaterCrisisStats';
import ImpactFeatures from '../components/ImpactFeatures';
import WaterQualityIndex from '../components/WaterQualityIndex';
import CommunityStories from '../components/CommunityStories';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    animateOnScroll();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <WaterCrisisStats />
        <div className="my-12 border-t border-gray-100 dark:border-gray-700"></div>
        <WaterQualityIndex />
        <div className="my-12 border-t border-gray-100 dark:border-gray-700"></div>
        <CommunityStories />

        {/* Call to Action */}
        <div className="my-16 py-10 px-6 bg-water/5 dark:bg-water-dark/10 rounded-lg text-center scroll-animation">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
            {t('cta.join')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Indians who are making a difference in water conservation. Every drop saved counts towards a sustainable future.
          </p>
          <Button className="bg-water hover:bg-water-dark text-white font-medium py-3 px-8 rounded-md hover-scale transition-all duration-300">
            <span>{t('home.hero.cta')}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <ImpactFeatures />
    </div>
  );
};

export default Index;
