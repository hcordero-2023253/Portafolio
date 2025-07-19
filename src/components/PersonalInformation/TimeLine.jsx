import { Icon } from '@iconify/react';
import React from 'react';

// Datos de ejemplo (modifícalos con tu información real)
const timelineItems = [
    {
        type: 'education',
        title: 'Aprendizaje en Desarrollo Web y Software',
        institution: 'Fundación Kinal - Guatemala',
        date: '2023 - Actualidad',
        icon: 'fluent:hat-graduation-24-filled',
        description: [
            'Especialización en desarrollo web fullstack',
            'Participación en proyectos colaborativos',
            'Participación con metodología scrum y herramientas de control de versiones'
        ],
        techs: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML'],
        badge: 'En curso'
    },
    {
        type: 'education',
        title: 'Bootcamp Full Stack',
        institution: 'Fundación Kinal - Guatemala',
        date: '2023 - Actualidad',
        icon: 'carbon:course',
        description: [
        '400 horas de formación intensiva',
        'Proyecto final: E-commerce completo',
        'Enfoque en buenas prácticas y clean code'
        ],
        techs: ['MERN Stack', 'JWT', 'Tailwind']
    },
    {
        type: 'experience', 
        title: 'Desarrollo Colaborativo',
        institution: 'Proyectos en Equipo',
        date: '2023 - Actualidad',
        icon: 'ph:users-three-fill', 
        description: [
            'Co-desarrollo de 3 aplicaciones web con equipo multidisciplinario',
            'Colaboración usando Git/GitHub con metodologías ágiles (Scrum)',
            'Revisiones de código (code reviews) y pair programming',
            'Desarrollo de APIs compartidas y componentes reutilizables'
        ],
        techs: ['React', 'Node.js', 'Git', 'JavaScript', 'Jira'],
        badge: 'Equipo de 6'
    },
    {
        type: 'education',
        title: 'Aprenduzaje en Cyberseguridad',
        institution: 'Apredizaje Autodidacta',
        date: '2025',
        icon: 'fluent:code-24-filled',
        description: [
            'Estudio de fundamentos de ciberseguridad',
            'Prácticas en entornos controlados',
            'Enfoque en seguridad web y protección de datos'
        ],
        techs: [ 'Python', 'Kali Linux', 'OWASP', 'virtual machines'],
    }
];

// Componente para cada item del timeline
const TimelineItem = ({ item, side }) => (
  <div className={`mb-12 flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} md:flex-row`}>
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 border-4 border-gray-800 z-10 mx-auto">
      <Icon icon={item.icon} className="text-white text-lg" />
    </div>
    <div className={`w-full md:w-5/6 ${side === 'left' ? 'pl-6 pr-2' : 'pr-6 pl-2'}`}>
      <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mt-2 md:mt-0">
            {item.date}
          </span>
        </div>
        <p className="text-gray-300 mb-3">{item.institution}</p>
        {item.badge && (
          <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded mb-3">
            {item.badge}
          </span>
        )}
        <ul className="text-gray-400 space-y-2">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start">
              <Icon icon="ph:caret-right-fill" className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
        
        {item.techs && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.techs.map((tech, i) => (
              <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

// Componente principal
export const EducationExperience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12" id="education-experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-3 flex items-center justify-center">
          <Icon icon="fluent:hat-graduation-24-filled" className="text-blue-400 mr-3" />
          Trayectoria Académica & Experiencia
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Mi formación técnica y participación en proyectos relevantes
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 w-1 h-full bg-blue-500/30 transform -translate-x-1/2"></div>
        
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            side={index % 2 === 0 ? 'left' : 'right'} 
          />
        ))}
      </div>
    </div>
  );
};

