
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { useLanguage } from '../contexts/LanguageContext';

type WaterQualityData = {
  region: string;
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'poor' | 'very-poor';
};

// Sample WQI data - in a real app, this would come from an API
const waterQualityData: WaterQualityData[] = [
  { region: 'Delhi', score: 35, status: 'poor' },
  { region: 'Mumbai', score: 65, status: 'fair' },
  { region: 'Chennai', score: 45, status: 'poor' },
  { region: 'Bangalore', score: 75, status: 'good' },
  { region: 'Pune', score: 70, status: 'good' },
  { region: 'Hyderabad', score: 55, status: 'fair' },
];

const getStatusColor = (status: WaterQualityData['status']) => {
  switch (status) {
    case 'excellent': return 'bg-green-500';
    case 'good': return 'bg-green-400';
    case 'fair': return 'bg-yellow-400';
    case 'poor': return 'bg-orange-400';
    case 'very-poor': return 'bg-red-500';
    default: return 'bg-gray-400';
  }
};

const WaterQualityIndex: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{t('wqi.title')}</h2>
        <p className="text-gray-600">{t('wqi.description')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {waterQualityData.map((item) => (
          <div key={item.region} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{item.region}</h3>
              <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(item.status)} bg-opacity-20 text-gray-800`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
            <Progress value={item.score} className="h-2" />
            <span className="text-sm text-gray-500 mt-1 block">
              Score: {item.score}/100
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaterQualityIndex;
