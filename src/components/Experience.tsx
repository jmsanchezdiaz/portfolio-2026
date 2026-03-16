import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <FadeIn>
        <p className="section-label">{t.experience.title}</p>
      </FadeIn>
      <div className="experience-list">
        {t.experience.jobs.map((job, i) => (
          <FadeIn key={job.id} delay={i * 0.1}>
            <div className="exp-item">
              <div className="exp-meta">
                <p className="exp-company">{job.company}</p>
                <p className="exp-location">{job.location}</p>
                <p className="exp-period">{job.period}</p>
              </div>
              <div className="exp-content">
                <p className="exp-role">{job.role}</p>
                <ul className="exp-items">
                  {job.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
