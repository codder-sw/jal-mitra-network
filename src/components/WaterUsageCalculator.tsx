
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WaterUsageInputs from './calculator/WaterUsageInputs';
import WaterUsageResults from './calculator/WaterUsageResults';
import { WaterUsage } from '../types/waterCalculator';
import { getDefaultUsageData } from '../utils/waterCalculatorUtils';

const WaterUsageCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [showResults, setShowResults] = useState(false);
  const [usageData, setUsageData] = useState<WaterUsage[]>(getDefaultUsageData());
  
  const handleUsageChange = (index: number, value: number) => {
    const newData = [...usageData];
    newData[index].value = value;
    setUsageData(newData);
  };
  
  const calculateWaterUsage = () => {
    setShowResults(true);
  };
  
  const resetCalculator = () => {
    setUsageData(getDefaultUsageData());
    setShowResults(false);
  };
  
  return (
    <Card className="animate-fade-in shadow-lg overflow-hidden dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{t('calculator.title')}</CardTitle>
        <CardDescription>{t('calculator.description')}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <WaterUsageInputs usageData={usageData} onUsageChange={handleUsageChange} />
        
        {showResults && <WaterUsageResults usageData={usageData} />}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {!showResults ? (
          <Button 
            onClick={calculateWaterUsage} 
            className="w-full bg-water hover:bg-water-dark text-white"
          >
            {t('calculator.calculate')}
          </Button>
        ) : (
          <Button 
            onClick={resetCalculator} 
            variant="outline" 
            className="w-full"
          >
            {t('calculator.reset')}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default WaterUsageCalculator;
