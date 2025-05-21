
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Trees, Users, Earth } from 'lucide-react';

const ImpactFeatures: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    const features = document.querySelectorAll('.feature-card');
    
    features.forEach((feature, index) => {
      feature.classList.add('scroll-animation');
      feature.classList.add(`delay-${index * 100}`);
    });
    
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
  
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: t('home.features.tracking'),
      description: t('home.features.tracking.desc'),
    },
    {
      icon: <Trees className="h-6 w-6" />,
      title: t('home.features.agriculture'),
      description: t('home.features.agriculture.desc'),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('home.features.community'),
      description: t('home.features.community.desc'),
    },
    {
      icon: <Earth className="h-6 w-6" />,
      title: t('home.features.education'),
      description: t('home.features.education.desc'),
    },
  ];
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 scroll-animation dark:text-white transition-colors duration-300">
          {t('home.features.title')}
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card border-none shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-700 dark:text-white hover-scale"
            >
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-water/10 flex items-center justify-center text-water mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl dark:text-white transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactFeatures;
