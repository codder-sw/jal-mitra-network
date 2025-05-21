
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Droplet, Menu, X } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Droplet size={24} className="text-water animate-flow" />
              <div className="absolute inset-0 bg-water/20 rounded-full ripple-effect"></div>
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900">{t('app.title')}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-water">{t('nav.home')}</Link>
            <Link to="/water-quality" className="text-gray-600 hover:text-water">{t('nav.waterQuality')}</Link>
            <Link to="/agriculture" className="text-gray-600 hover:text-water">{t('nav.agriculture')}</Link>
            <Link to="/education" className="text-gray-600 hover:text-water">{t('nav.education')}</Link>
            <Link to="/community" className="text-gray-600 hover:text-water">{t('nav.community')}</Link>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-2">
                  {languageOptions.find(opt => opt.value === language)?.label || 'English'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.value}
                    onClick={() => setLanguage(option.value)}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="mr-2">
                  {languageOptions.find(opt => opt.value === language)?.label || 'English'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.value}
                    onClick={() => setLanguage(option.value)}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-2">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 hover:text-water" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/water-quality" className="text-gray-600 hover:text-water" onClick={() => setIsMenuOpen(false)}>
                {t('nav.waterQuality')}
              </Link>
              <Link to="/agriculture" className="text-gray-600 hover:text-water" onClick={() => setIsMenuOpen(false)}>
                {t('nav.agriculture')}
              </Link>
              <Link to="/education" className="text-gray-600 hover:text-water" onClick={() => setIsMenuOpen(false)}>
                {t('nav.education')}
              </Link>
              <Link to="/community" className="text-gray-600 hover:text-water" onClick={() => setIsMenuOpen(false)}>
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
