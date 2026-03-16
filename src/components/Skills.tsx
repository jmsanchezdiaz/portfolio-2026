import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills">
      <FadeIn>
        <p className="section-label">{t.skills.title}</p>
      </FadeIn>
      <div className="skills-grid">
        {t.skills.categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={i * 0.07}>
            <div className="skill-category">
              <p className="skill-category-name">{cat.name}</p>
              <div className="skill-tags">
                {cat.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
