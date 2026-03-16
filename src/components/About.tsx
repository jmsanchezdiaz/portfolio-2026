import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <FadeIn>
        <p className="section-label">{t.about.title}</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="about-bio">{t.about.bio}</p>
      </FadeIn>
    </section>
  );
}
