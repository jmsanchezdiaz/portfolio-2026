import { useLanguage } from '../contexts/LanguageContext';
import { FadeIn } from './FadeIn';

function calcYearsExperience(jobs: { startDate: string; endDate: string | null }[]): number {
  const today = new Date();
  const intervals = jobs
    .map(job => ({
      start: new Date(job.startDate + '-01'),
      end: job.endDate ? new Date(job.endDate + '-01') : today,
    }))
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const merged: { start: Date; end: Date }[] = [];
  for (const interval of intervals) {
    const last = merged[merged.length - 1];
    if (!last || interval.start > last.end) {
      merged.push({ ...interval });
    } else {
      last.end = new Date(Math.max(last.end.getTime(), interval.end.getTime()));
    }
  }

  const totalMonths = merged.reduce((acc, { start, end }) => {
    return acc + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  }, 0);

  return Math.round(totalMonths / 12);
}

export function Experience() {
  const { t } = useLanguage();
  const years = calcYearsExperience(t.experience.jobs);

  return (
    <section id="experience">
      <FadeIn>
        <p className="section-label">
          {t.experience.title}
          <span className="section-label-years">({years} {t.experience.years})</span>
        </p>
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
