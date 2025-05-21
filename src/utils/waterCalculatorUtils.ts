
import { WaterUsage } from "../types/waterCalculator";

export const calculateTotalUsage = (usageData: WaterUsage[]): number => {
  return usageData.reduce((acc, item) => acc + (item.value * item.liters), 0);
};

export const getDefaultUsageData = (): WaterUsage[] => {
  return [
    { activity: 'shower', value: 1, liters: 70 },
    { activity: 'toilet', value: 5, liters: 30 },
    { activity: 'washing', value: 1, liters: 100 },
    { activity: 'drinking', value: 2, liters: 2 },
    { activity: 'cooking', value: 1, liters: 20 },
    { activity: 'cleaning', value: 1, liters: 50 },
  ];
};

export const CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
