
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, AlertTriangle, Tractor } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const WaterCrisisStats: React.FC = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-card');
    
    stats.forEach((stat, index) => {
      stat.classList.add('scroll-animation');
      stat.classList.add(`delay-${index * 100}`);
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

  const stats = [
    {
      icon: <Droplet className="h-8 w-8 text-water" />,
      title: t('stats.population'),
      value: 600,
      suffix: 'M',
      description: 'Indians affected by water crisis'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
      title: t('stats.groundwater'),
      value: 70,
      suffix: '%',
      description: 'Water contamination rate'
    },
    {
      icon: <Tractor className="h-8 w-8 text-soil" />,
      title: t('stats.farmers'),
      value: 80,
      suffix: '%',
      description: 'Agricultural water usage'
    }
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 scroll-animation">
          {t('stats.waterCrisis')}
        </h2>
        <div className="h-1 w-20 bg-water mx-auto rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                  />
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WaterCrisisStats;
