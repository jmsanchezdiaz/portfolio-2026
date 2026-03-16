export const en = {
  nav: {
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Juan Manuel Sanchez Diaz',
    role: 'Fullstack Software Developer',
    location: 'Buenos Aires, Argentina',
    cta: 'Get in touch',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  about: {
    title: 'About',
    bio: "I'm a fullstack developer who loves building efficient solutions and working as part of a team. I'm passionate about learning and continuously improving as a programmer. I recently completed my Associate Degree in Computer Science and I'm currently pursuing my B.Sc. at Universidad Nacional de Quilmes. Self-taught at heart, I'm always looking for new knowledge and technologies to grow as a developer.",
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        id: '10pines',
        company: '10Pines',
        location: 'Buenos Aires, Argentina',
        role: 'Fullstack Software Developer',
        period: 'Sep 2025 – Present',
        items: [
          'Building fullstack features collaborating directly with US clients in English.',
          'Leading epics across frontend and backend.',
          'Stack: TypeScript, React, NestJS, GraphQL, PostgreSQL.',
        ],
      },
      {
        id: 'alliants',
        company: 'Alliants',
        location: 'United Kingdom',
        role: 'Fullstack Software Developer',
        period: 'May 2022 – Jun 2025',
        items: [
          'Built end-to-end features with React, TypeScript and Ruby on Rails, handling UI, business logic and global state.',
          'Contributed to 15+ features across frontend and backend (services, models, controllers).',
          'Improved search UX via progressive loading, reducing perceived wait times from several seconds to a seamless experience.',
          'Automated role and permission corrections with Ruby scripts, improving data integrity.',
          'Designed and maintained Cypress integration tests and RSpec backend tests.',
        ],
      },
      {
        id: 'unq-ta',
        company: 'Universidad Nacional de Quilmes',
        location: 'Buenos Aires, Argentina',
        role: 'Teaching Assistant – OOP II',
        period: 'Aug 2022 – Dec 2022',
        items: [
          'Led practical OOP sessions and guided students on TDD and SOLID principles.',
          'Reviewed final projects providing technical feedback.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    categories: [
      { name: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Tailwind', 'SASS', 'CSS'] },
      { name: 'Backend', items: ['NestJS', 'Node.js', 'Ruby on Rails', 'GraphQL', 'Java', 'Spring Boot'] },
      { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
      { name: 'Testing', items: ['Cypress', 'Jest', 'React Testing Library', 'RSpec', 'JUnit'] },
      { name: 'Tools', items: ['Git', 'GitHub', 'Scrum', 'Agile', 'Postman'] },
      { name: 'Observability', items: ['Kibana', 'Grafana', 'Prometheus'] },
      { name: 'AI Tools', items: ['Cursor', 'Claude', 'GitHub Copilot'] },
    ],
  },
  education: {
    title: 'Education',
    degrees: [
      {
        id: 'licenciatura',
        institution: 'Universidad Nacional de Quilmes',
        degree: 'B.Sc. in Computer Science (in progress)',
        period: '2020 – Present',
        items: [
          'Builds on the technical foundation with a deeper focus on computer science theory, software engineering, and systems design.',
          'Covers topics such as Theory of Computation, Requirements Engineering, Software Architecture, Project Management, and distributed systems.',
        ],
      },
      {
        id: 'tecnico',
        institution: 'Universidad Nacional de Quilmes',
        degree: 'Associate Degree in Computer Science',
        period: '2020 – Dec 2025',
        items: [
          'Data structures, algorithms, concurrency, OOP and persistence.',
          'Unit, integration, e2e and architecture testing with JUnit, Jest and ArchUnit.',
          'MVPs with Java, Kotlin, Spring Boot, Firebase and React.',
        ],
      },
    ],
  },
  contact: {
    title: "Let's talk",
    subtitle: "I'm open to new opportunities. Feel free to reach out.",
    label: 'Contact',
    email: 'Send an email',
    linkedin: 'Connect on LinkedIn',
    github: 'GitHub',
  },
};

export type Translations = typeof en;
