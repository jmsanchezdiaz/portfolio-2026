import { createContext, useContext, useEffect, useState } from 'react';
import { en } from '../translations/en';
import { es } from '../translations/es';
import type { Translations } from '../translations/en';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => setLanguage(l => (l === 'en' ? 'es' : 'en'));

  const t = language === 'en' ? en : es;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
