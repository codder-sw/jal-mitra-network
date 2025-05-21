
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { WaterUsage } from '../../types/waterCalculator';
import { useLanguage } from '../../contexts/LanguageContext';

interface WaterUsageInputsProps {
  usageData: WaterUsage[];
  onUsageChange: (index: number, value: number) => void;
}

const WaterUsageInputs: React.FC<WaterUsageInputsProps> = ({ 
  usageData, 
  onUsageChange 
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
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
              onValueChange={(value) => onUsageChange(index, value[0])}
              className="flex-1"
            />
            <Input 
              type="number"
              value={item.value}
              onChange={(e) => onUsageChange(index, parseInt(e.target.value) || 0)}
              className="w-16"
              min="0"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaterUsageInputs;
