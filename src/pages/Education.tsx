
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import WaterConservationQuiz from '../components/WaterConservationQuiz';
import FeedbackForm from '../components/FeedbackForm';
import { Book, Activity, Award, Users } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();
  
  const resources = [
    {
      title: 'Water Conservation Guide for Students',
      description: 'Interactive lessons on water conservation practices for students of all ages.',
      tags: ['Students', 'Interactive'],
      icon: <Book className="h-6 w-6 text-water" />
    },
    {
      title: 'Classroom Activities',
      description: 'Hands-on activities for teachers to engage students in water conservation topics.',
      tags: ['Teachers', 'Activities'],
      icon: <Activity className="h-6 w-6 text-water" />
    },
    {
      title: 'Water Audit Toolkit',
      description: 'Tools and guidelines for conducting water audits in schools and communities.',
      tags: ['Advanced', 'Toolkit'],
      icon: <Users className="h-6 w-6 text-water" />
    },
    {
      title: 'Interactive Water Cycle',
      description: 'Visual guide to understanding the water cycle and human impact.',
      tags: ['Visual', 'Beginner'],
      icon: <Award className="h-6 w-6 text-water" />
    }
  ];

  useEffect(() => {
    // Initialize intersection observer for animations
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
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center scroll-animation">{t('education.title')}</h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto text-lg scroll-animation">
          {t('education.description')}
        </p>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 scroll-animation">{t('education.materials')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {resources.map((resource, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-md transition-all duration-300 scroll-animation delay-${index * 100} dark:bg-gray-800 dark:border-gray-700`}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-water/10 flex items-center justify-center text-water mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2 dark:text-white">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-16 scroll-animation">
          <h2 className="text-2xl font-semibold mb-8">{t('education.quiz.title')}</h2>
          <WaterConservationQuiz />
        </section>
        
        <section className="mb-16 scroll-animation">
          <h2 className="text-2xl font-semibold mb-8">{t('feedback.title')}</h2>
          <FeedbackForm />
        </section>
        
        <section className="bg-water/5 dark:bg-water-dark/10 p-6 rounded-lg text-center py-10 scroll-animation">
          <h2 className="text-2xl font-semibold mb-4">{t('cta.join')}</h2>
          <p className="mb-6 max-w-2xl mx-auto">Together we can make a difference in preserving our most precious resource - water.</p>
          <button className="bg-water hover:bg-water-dark text-white font-medium py-3 px-6 rounded-md hover-scale transition-all duration-300">
            {t('home.hero.cta')}
          </button>
        </section>
      </div>
    </div>
  );
};

export default Education;
