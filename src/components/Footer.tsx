
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Droplet, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Droplet size={24} className="text-water" />
              <span className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">{t('app.title')}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 max-w-md">
              {t('app.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.home')}</Link></li>
              <li><Link to="/water-quality" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.waterQuality')}</Link></li>
              <li><Link to="/agriculture" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.agriculture')}</Link></li>
              <li><Link to="/education" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.education')}</Link></li>
              <li><Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('nav.community')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <li>contact@jalmitra.org</li>
              <li>+91 1234567890</li>
              <li>New Delhi, India</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-water dark:hover:text-water-light transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-water dark:hover:text-water-light transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-water dark:hover:text-water-light transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          <p>&copy; {currentYear} {t('app.title')}. {t('footer.rights')}</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-water dark:hover:text-water-light transition-colors duration-300">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
