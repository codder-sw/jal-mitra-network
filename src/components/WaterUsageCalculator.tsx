
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

interface WaterUsage {
  activity: string;
  value: number;
  liters: number;
}

const WaterUsageCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [showResults, setShowResults] = useState(false);
  
  const [usageData, setUsageData] = useState<WaterUsage[]>([
    { activity: 'shower', value: 1, liters: 70 },
    { activity: 'toilet', value: 5, liters: 30 },
    { activity: 'washing', value: 1, liters: 100 },
    { activity: 'drinking', value: 2, liters: 2 },
    { activity: 'cooking', value: 1, liters: 20 },
    { activity: 'cleaning', value: 1, liters: 50 },
  ]);
  
  const totalUsage = usageData.reduce((acc, item) => acc + (item.value * item.liters), 0);
  
  const handleUsageChange = (index: number, value: number) => {
    const newData = [...usageData];
    newData[index].value = value;
    setUsageData(newData);
  };
  
  const calculateWaterUsage = () => {
    setShowResults(true);
  };
  
  const resetCalculator = () => {
    setUsageData([
      { activity: 'shower', value: 1, liters: 70 },
      { activity: 'toilet', value: 5, liters: 30 },
      { activity: 'washing', value: 1, liters: 100 },
      { activity: 'drinking', value: 2, liters: 2 },
      { activity: 'cooking', value: 1, liters: 20 },
      { activity: 'cleaning', value: 1, liters: 50 },
    ]);
    setShowResults(false);
  };
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  const chartConfig = {
    shower: { label: t('calculator.shower'), color: '#0088FE' },
    toilet: { label: t('calculator.toilet'), color: '#00C49F' },
    washing: { label: t('calculator.washing'), color: '#FFBB28' },
    drinking: { label: t('calculator.drinking'), color: '#FF8042' },
    cooking: { label: t('calculator.cooking'), color: '#8884d8' },
    cleaning: { label: t('calculator.cleaning'), color: '#82ca9d' },
  };
  
  return (
    <Card className="animate-fade-in shadow-lg overflow-hidden dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{t('calculator.title')}</CardTitle>
        <CardDescription>{t('calculator.description')}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {usageData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium">
                {t(`calculator.${item.activity}`)}
              </label>
              <span className="text-sm text-muted-foreground">
                {item.value} × {item.liters}L = {item.value * item.liters}L
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Slider
                value={[item.value]}
                min={0}
                max={item.activity === 'shower' ? 3 : item.activity === 'toilet' ? 10 : 5}
                step={1}
                onValueChange={(value) => handleUsageChange(index, value[0])}
                className="flex-1"
              />
              <Input 
                type="number"
                value={item.value}
                onChange={(e) => handleUsageChange(index, parseInt(e.target.value) || 0)}
                className="w-16"
                min="0"
              />
            </div>
          </div>
        ))}
        
        {showResults && (
          <div className="pt-4 space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold">{t('calculator.totalUsage')}</h3>
              <p className="text-3xl font-bold text-water">{totalUsage} {t('calculator.liters')}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t('calculator.averageComparison', { percent: Math.round(totalUsage / 150 * 100) })}
              </p>
            </div>
            
            <div className="h-[300px] w-full">
              <ChartContainer className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={usageData.map(item => ({
                      name: item.activity,
                      liters: item.value * item.liters
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Liters', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="liters" fill="#8884d8">
                      {usageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="h-[300px] w-full">
              <ChartContainer className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={usageData.map(item => ({
                        name: item.activity,
                        value: item.value * item.liters
                      }))}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {usageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="p-4 bg-water/10 dark:bg-water-dark/10 rounded-lg">
              <h4 className="font-medium mb-2">{t('calculator.tips.title')}</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>{t('calculator.tips.tip1')}</li>
                <li>{t('calculator.tips.tip2')}</li>
                <li>{t('calculator.tips.tip3')}</li>
                <li>{t('calculator.tips.tip4')}</li>
              </ul>
            </div>
          </div>
        )}
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
