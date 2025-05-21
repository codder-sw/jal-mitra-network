
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Droplet, Menu, X, Moon, Sun } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const languageOptions: { value: Language; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'हिंदी' },
    { value: 'mr', label: 'मराठी' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Droplet size={24} className="text-water group-hover:text-water-dark transition-colors duration-300 animate-flow" />
              <div className="absolute inset-0 bg-water/20 rounded-full ripple-effect"></div>
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900 dark:text-white transition-colors duration-300">{t('app.title')}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.home')}</Link>
            <Link to="/water-quality" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.waterQuality')}</Link>
            <Link to="/agriculture" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.agriculture')}</Link>
            <Link to="/education" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.education')}</Link>
            <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.community')}</Link>
            
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="rounded-full"
              aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="ml-2 transition-colors duration-300"
                >
                  {languageOptions.find(opt => opt.value === language)?.label || 'English'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={cn(
                "animate-in fade-in-80 zoom-in-95",
                "dark:bg-gray-800 dark:text-white dark:border-gray-700"
              )}>
                {languageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.value}
                    onClick={() => setLanguage(option.value)}
                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="mr-2 rounded-full"
              aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="mr-2 transition-colors duration-300">
                  {languageOptions.find(opt => opt.value === language)?.label || 'English'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={cn(
                "animate-in fade-in-80 zoom-in-95",
                "dark:bg-gray-800 dark:text-white dark:border-gray-700"
              )}>
                {languageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.value}
                    onClick={() => setLanguage(option.value)}
                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu} 
              className="transition-colors duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-2 dark:border-gray-700 transition-colors duration-300">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/water-quality" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {t('nav.waterQuality')}
              </Link>
              <Link to="/agriculture" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {t('nav.agriculture')}
              </Link>
              <Link to="/education" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {t('nav.education')}
              </Link>
              <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {t('nav.community')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
