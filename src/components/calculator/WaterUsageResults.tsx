
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { WaterUsage } from '../../types/waterCalculator';
import { calculateTotalUsage, CHART_COLORS } from '../../utils/waterCalculatorUtils';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface WaterUsageResultsProps {
  usageData: WaterUsage[];
}

const WaterUsageResults: React.FC<WaterUsageResultsProps> = ({ usageData }) => {
  const { t } = useLanguage();
  const totalUsage = calculateTotalUsage(usageData);
  
  const chartConfig = {
    shower: { label: t('calculator.shower'), color: '#0088FE' },
    toilet: { label: t('calculator.toilet'), color: '#00C49F' },
    washing: { label: t('calculator.washing'), color: '#FFBB28' },
    drinking: { label: t('calculator.drinking'), color: '#FF8042' },
    cooking: { label: t('calculator.cooking'), color: '#8884d8' },
    cleaning: { label: t('calculator.cleaning'), color: '#82ca9d' },
  };

  const chartData = usageData.map(item => ({
    name: item.activity,
    liters: item.value * item.liters
  }));

  return (
    <div className="pt-4 space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold">{t('calculator.totalUsage')}</h3>
        <p className="text-3xl font-bold text-water">{totalUsage} {t('calculator.liters')}</p>
        <p className="text-sm text-muted-foreground mt-1">
          {t('calculator.averageComparison', { percent: Math.round(totalUsage / 150 * 100) })}
        </p>
      </div>
      
      <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Liters', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="liters" fill="#8884d8">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      
      <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="liters"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      
      <WaterSavingTips />
    </div>
  );
};

const WaterSavingTips: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="p-4 bg-water/10 dark:bg-water-dark/10 rounded-lg">
      <h4 className="font-medium mb-2">{t('calculator.tips.title')}</h4>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>{t('calculator.tips.tip1')}</li>
        <li>{t('calculator.tips.tip2')}</li>
        <li>{t('calculator.tips.tip3')}</li>
        <li>{t('calculator.tips.tip4')}</li>
      </ul>
    </div>
  );
};

export default WaterUsageResults;
