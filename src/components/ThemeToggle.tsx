
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { Switch } from './ui/switch';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-water dark:data-[state=checked]:bg-water-dark"
      />
      <span className="sr-only md:not-sr-only text-sm">
        {theme === 'dark' ? 'Dark' : 'Light'} Mode
      </span>
      {theme === 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </div>
  );
};

export default ThemeToggle;
