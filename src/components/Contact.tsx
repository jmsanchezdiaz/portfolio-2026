import { Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <FadeIn>
        <p className="section-label">{t.contact.label}</p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="contact-title">{t.contact.title}</h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="contact-links">
          <a className="btn btn-primary" href="mailto:jmsanchezdiaz02@gmail.com">
            <Mail size={14} strokeWidth={2} />
            {t.contact.email}
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/juan-manuel-sanchez-diaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={14} strokeWidth={2} />
            {t.contact.linkedin}
          </a>
          <a
            className="btn btn-secondary"
            href="https://github.com/jmsanchezdiaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={14} strokeWidth={2} />
            {t.contact.github}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
