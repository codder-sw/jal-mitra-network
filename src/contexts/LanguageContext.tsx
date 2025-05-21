
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'hi' | 'mr';

// Define language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create language context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    'app.title': 'Jal Mitra Network',
    'app.tagline': 'Every drop counts—use water wisely',
    'nav.home': 'Home',
    'nav.waterQuality': 'Water Quality',
    'nav.agriculture': 'Agriculture',
    'nav.education': 'Education',
    'nav.community': 'Community',
    'stats.waterCrisis': 'Water Crisis',
    'stats.population': '600 million Indians face high water stress',
    'stats.groundwater': '70% of India\'s water is contaminated',
    'stats.farmers': '80% of freshwater is used for agriculture',
    'home.hero.title': 'Join the Movement for Water Conservation',
    'home.hero.subtitle': 'Learn, engage, and take action to protect India\'s water resources',
    'home.hero.cta': 'Get Started',
    'home.features.title': 'Our Mission',
    'home.features.education': 'Education',
    'home.features.education.desc': 'Learn about water conservation and sustainable practices',
    'home.features.tracking': 'Track Quality',
    'home.features.tracking.desc': 'Monitor water quality in your area',
    'home.features.community': 'Community',
    'home.features.community.desc': 'Share stories and connect with others',
    'home.features.agriculture': 'Agriculture',
    'home.features.agriculture.desc': 'Discover drought-resistant farming techniques',
    'wqi.title': 'Water Quality Index',
    'wqi.description': 'Track the quality of water in different regions',
    'community.title': 'Community Stories',
    'community.subtitle': 'Real people making a difference',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  hi: {
    'app.title': 'जल मित्र नेटवर्क',
    'app.tagline': 'हर बूंद मायने रखती है—पानी का उपयोग समझदारी से करें',
    'nav.home': 'होम',
    'nav.waterQuality': 'जल गुणवत्ता',
    'nav.agriculture': 'कृषि',
    'nav.education': 'शिक्षा',
    'nav.community': 'समुदाय',
    'stats.waterCrisis': 'जल संकट',
    'stats.population': '600 मिलियन भारतीय उच्च जल तनाव का सामना करते हैं',
    'stats.groundwater': 'भारत का 70% पानी दूषित है',
    'stats.farmers': '80% ताजे पानी का उपयोग कृषि के लिए किया जाता है',
    'home.hero.title': 'जल संरक्षण के आंदोलन में शामिल हों',
    'home.hero.subtitle': 'भारत के जल संसाधनों की रक्षा के लिए सीखें, जुड़ें और कार्रवाई करें',
    'home.hero.cta': 'शुरू करें',
    'home.features.title': 'हमारा मिशन',
    'home.features.education': 'शिक्षा',
    'home.features.education.desc': 'जल संरक्षण और टिकाऊ प्रथाओं के बारे में जानें',
    'home.features.tracking': 'गुणवत्ता ट्रैक करें',
    'home.features.tracking.desc': 'अपने क्षेत्र में पानी की गुणवत्ता की निगरानी करें',
    'home.features.community': 'समुदाय',
    'home.features.community.desc': 'कहानियां साझा करें और दूसरों से जुड़ें',
    'home.features.agriculture': 'कृषि',
    'home.features.agriculture.desc': 'सूखा प्रतिरोधी खेती तकनीकों का पता लगाएं',
    'wqi.title': 'जल गुणवत्ता सूचकांक',
    'wqi.description': 'विभिन्न क्षेत्रों में पानी की गुणवत्ता का ट्रैक करें',
    'community.title': 'सामुदायिक कहानियां',
    'community.subtitle': 'वास्तविक लोग जो अंतर ला रहे हैं',
    'footer.rights': 'सर्वाधिकार सुरक्षित',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
  },
  mr: {
    'app.title': 'जल मित्र नेटवर्क',
    'app.tagline': 'प्रत्येक थेंब महत्वाचा आहे—पाण्याचा वापर विवेकाने करा',
    'nav.home': 'होम',
    'nav.waterQuality': 'पाणी गुणवत्ता',
    'nav.agriculture': 'कृषी',
    'nav.education': 'शिक्षण',
    'nav.community': 'समुदाय',
    'stats.waterCrisis': 'पाणी संकट',
    'stats.population': '600 दशलक्ष भारतीय तीव्र पाणी ताण अनुभवतात',
    'stats.groundwater': 'भारताचे 70% पाणी दूषित आहे',
    'stats.farmers': '80% ताज्या पाण्याचा वापर शेतीसाठी केला जातो',
    'home.hero.title': 'पाणी संवर्धन चळवळीत सामील व्हा',
    'home.hero.subtitle': 'भारताच्या पाणी संसाधनांचे संरक्षण करण्यासाठी शिका, सहभागी व्हा आणि कृती करा',
    'home.hero.cta': 'सुरू करा',
    'home.features.title': 'आमचे मिशन',
    'home.features.education': 'शिक्षण',
    'home.features.education.desc': 'पाणी संवर्धन आणि शाश्वत पद्धतींबद्दल शिका',
    'home.features.tracking': 'गुणवत्ता ट्रॅक करा',
    'home.features.tracking.desc': 'आपल्या भागातील पाण्याची गुणवत्ता मॉनिटर करा',
    'home.features.community': 'समुदाय',
    'home.features.community.desc': 'कथा शेअर करा आणि इतरांशी कनेक्ट व्हा',
    'home.features.agriculture': 'कृषी',
    'home.features.agriculture.desc': 'दुष्काळ प्रतिरोधक शेती तंत्रांचा शोध घ्या',
    'wqi.title': 'पाणी गुणवत्ता निर्देशांक',
    'wqi.description': 'विविध प्रदेशांतील पाण्याच्या गुणवत्तेचा मागोवा घ्या',
    'community.title': 'समुदाय कथा',
    'community.subtitle': 'खरे लोक फरक घडवत आहेत',
    'footer.rights': 'सर्व हक्क राखीव',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.terms': 'सेवा अटी',
  },
};

// Create language provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
