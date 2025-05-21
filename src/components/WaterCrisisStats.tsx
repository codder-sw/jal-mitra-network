
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Users, Earth } from 'lucide-react';

const WaterCrisisStats: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-center mb-6">{t('stats.waterCrisis')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-water/10 flex items-center justify-center text-water mb-4">
              <Users size={24} />
            </div>
            <p className="text-lg font-medium mb-2">{t('stats.population')}</p>
            <div className="mt-2">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-water/20">
                  <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-water animate-pulse"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-water/10 flex items-center justify-center text-water mb-4">
              <Droplet size={24} />
            </div>
            <p className="text-lg font-medium mb-2">{t('stats.groundwater')}</p>
            <div className="mt-2">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-water/20">
                  <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-water animate-pulse"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-water/10 flex items-center justify-center text-water mb-4">
              <Earth size={24} />
            </div>
            <p className="text-lg font-medium mb-2">{t('stats.farmers')}</p>
            <div className="mt-2">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-water/20">
                  <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-water animate-pulse"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaterCrisisStats;
