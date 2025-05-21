
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WaterUsageCalculator from '../components/WaterUsageCalculator';

const WaterUsageCalculatorPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in">{t('calculator.pageTitle')}</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
          {t('calculator.pageDescription')}
        </p>
        
        <WaterUsageCalculator />
        
        <div className="mt-12 p-6 bg-water/5 dark:bg-water-dark/10 rounded-lg animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">{t('calculator.didYouKnow.title')}</h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>{t('calculator.didYouKnow.fact1')}</p>
            <p>{t('calculator.didYouKnow.fact2')}</p>
            <p>{t('calculator.didYouKnow.fact3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterUsageCalculatorPage;
