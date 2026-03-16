import type { Translations } from './en';

export const es: Translations = {
  nav: {
    experience: 'Experiencia',
    skills: 'Habilidades',
    education: 'Educación',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Juan Manuel Sanchez Diaz',
    role: 'Desarrollador de Software Fullstack',
    location: 'Buenos Aires, Argentina',
    cta: 'Contactame',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  about: {
    title: 'Sobre mí',
    bio: 'Soy desarrollador fullstack y me encanta construir soluciones eficientes y trabajar en equipo. Me apasiona aprender y mejorar constantemente como programador. Recientemente me recibí de Técnico en Programación Informática y actualmente continúo mi formación cursando la Licenciatura en Programación Informática en la Universidad Nacional de Quilmes. Autodidacta de corazón, siempre en búsqueda de nuevos conocimientos y tecnologías para seguir creciendo como desarrollador.',
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        id: '10pines',
        company: '10Pines',
        location: 'Buenos Aires, Argentina',
        role: 'Desarrollador de Software Fullstack',
        period: 'Sep 2025 – Actualidad',
        items: [
          'Desarrollo de funcionalidades fullstack trabajando directamente con clientes de EE.UU. en inglés.',
          'Liderazgo de épicas en frontend y backend.',
          'Stack: TypeScript, React, NestJS, GraphQL, PostgreSQL.',
        ],
      },
      {
        id: 'alliants',
        company: 'Alliants',
        location: 'Reino Unido',
        role: 'Desarrollador de Software Fullstack',
        period: 'May 2022 – Jun 2025',
        items: [
          'Desarrollé funcionalidades end-to-end con React, TypeScript y Ruby on Rails, manejando UI, lógica de negocio y estado global.',
          'Contribuí al desarrollo de más de 15 features en frontend y backend (servicios, modelos, controladores).',
          'Mejoré la UX de búsquedas con carga progresiva, reduciendo el tiempo de espera percibido de varios segundos a una experiencia fluida.',
          'Automaticé correcciones de roles y permisos con scripts Ruby, mejorando la integridad del sistema.',
          'Diseñé y mantuve tests de integración con Cypress y pruebas de backend con RSpec.',
        ],
      },
      {
        id: 'unq-ta',
        company: 'Universidad Nacional de Quilmes',
        location: 'Buenos Aires, Argentina',
        role: 'Ayudante de Cátedra – POO II',
        period: 'Ago 2022 – Dic 2022',
        items: [
          'Dicté clases prácticas de POO y guié a estudiantes en TDD y patrones SOLID.',
          'Corregí trabajos finales con feedback técnico detallado.',
        ],
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    categories: [
      { name: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Tailwind', 'SASS', 'CSS'] },
      { name: 'Backend', items: ['NestJS', 'Node.js', 'Ruby on Rails', 'GraphQL', 'Java', 'Spring Boot'] },
      { name: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
      { name: 'Testing', items: ['Cypress', 'Jest', 'React Testing Library', 'RSpec', 'JUnit'] },
      { name: 'Herramientas', items: ['Git', 'GitHub', 'Scrum', 'Agile', 'Postman'] },
      { name: 'Observabilidad', items: ['Kibana', 'Grafana', 'Prometheus'] },
      { name: 'Herramientas AI', items: ['Cursor', 'Claude', 'GitHub Copilot'] },
    ],
  },
  education: {
    title: 'Educación',
    degrees: [
      {
        id: 'licenciatura',
        institution: 'Universidad Nacional de Quilmes',
        degree: 'Licenciatura en Programación Informática (en curso)',
        period: '2020 – Actualidad',
        items: [
          'Profundiza la base técnica con mayor énfasis en teoría de la computación, ingeniería de software y diseño de sistemas.',
          'Abarca materias como Teoría de la Computación, Ingeniería de Requerimientos, Arquitectura de Software, Gestión de Proyectos y sistemas distribuidos.',
        ],
      },
      {
        id: 'tecnico',
        institution: 'Universidad Nacional de Quilmes',
        degree: 'Técnico en Programación Informática',
        period: '2020 – Dic 2025',
        items: [
          'Estructuras de datos, algoritmos, concurrencia, POO y persistencia.',
          'Testing unitario, de integración, e2e y de arquitectura con JUnit, Jest y ArchUnit.',
          'Desarrollo de MVPs con Java, Kotlin, Spring Boot, Firebase y React.',
        ],
      },
    ],
  },
  contact: {
    title: 'Hablemos',
    subtitle: 'Estoy abierto a nuevas oportunidades. No dudes en escribirme.',
    label: 'Contacto',
    email: 'Enviar un email',
    linkedin: 'Conectar en LinkedIn',
    github: 'GitHub',
  },
};
