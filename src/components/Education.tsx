import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education">
      <FadeIn>
        <p className="section-label">{t.education.title}</p>
      </FadeIn>
      <div className="experience-list">
        {t.education.degrees.map((edu, i) => (
          <FadeIn key={edu.id} delay={i * 0.1}>
            <div className="exp-item">
              <div className="exp-meta">
                <p className="exp-company">{edu.institution}</p>
                <p className="exp-period">{edu.period}</p>
              </div>
              <div className="exp-content">
                <p className="exp-role">{edu.degree}</p>
                {edu.items.length > 0 && (
                  <ul className="exp-items">
                    {edu.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
