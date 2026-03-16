import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo-portfolio.webp';

const NAV_SECTIONS = ['about', 'experience', 'skills', 'education', 'contact'];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120; // offset below navbar
      let current = '';
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-brand" onClick={e => { e.preventDefault(); scrollTo('hero'); }}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>

      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><button className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>{t.about.title}</button></li>
        <li><button className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollTo('experience')}>{t.nav.experience}</button></li>
        <li><button className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollTo('skills')}>{t.nav.skills}</button></li>
        <li><button className={activeSection === 'education' ? 'active' : ''} onClick={() => scrollTo('education')}>{t.nav.education}</button></li>
        <li><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>{t.nav.contact}</button></li>
      </ul>

      <div className="navbar-actions">
        <button className="icon-btn lang-btn" onClick={toggleLanguage} aria-label="Toggle language">
          {language === 'en' ? 'ES' : 'EN'}
        </button>
        <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={15} strokeWidth={1.75} /> : <Sun size={15} strokeWidth={1.75} />}
        </button>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
