import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import foto from '../assets/foto.webp';

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  } as const;
}

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-layout">
        <div className="hero-text">
          <motion.p className="hero-greeting" {...fadeUp(0)}>
            {t.hero.greeting}
          </motion.p>
          <motion.h1 className="hero-name" {...fadeUp(0.1)}>
            {t.hero.name}
          </motion.h1>
          <motion.p className="hero-role" {...fadeUp(0.2)}>
            {t.hero.role}
          </motion.p>
          <motion.p className="hero-location" {...fadeUp(0.3)}>
            <MapPin size={14} strokeWidth={1.75} />
            {t.hero.location}
          </motion.p>
          <motion.div className="hero-ctas" {...fadeUp(0.4)}>
            <button className="btn btn-primary" onClick={scrollToContact}>
              <Mail size={14} strokeWidth={2} />
              {t.hero.cta}
            </button>
            <a
              className="btn btn-secondary"
              href="https://github.com/jmsanchezdiaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} strokeWidth={2} />
              {t.hero.github}
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={14} strokeWidth={2} />
              {t.hero.linkedin}
            </a>
          </motion.div>
        </div>
        <motion.div className="hero-photo-wrap" {...fadeUp(0.2)}>
          <img src={foto} alt="Juan Manuel Sanchez Diaz" className="hero-photo" />
        </motion.div>
      </div>
    </section>
  );
}
