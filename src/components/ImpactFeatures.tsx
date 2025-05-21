
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Tree, Users, Earth } from 'lucide-react';

const ImpactFeatures: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: t('home.features.tracking'),
      description: t('home.features.tracking.desc'),
    },
    {
      icon: <Tree className="h-6 w-6" />,
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('home.features.title')}</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-water/10 flex items-center justify-center text-water mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
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
