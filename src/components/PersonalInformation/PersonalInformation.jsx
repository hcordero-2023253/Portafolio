import { Icon } from '@iconify/react';
import { skills } from './Skills';
import { EducationExperience } from './TimeLine';
import { ProjectsGallery } from './ProjectsGallery';
import { ProjectPortfolio } from './ProjectPortafolio';

export const PersonalInformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-2xl p-6 mb-8 transform transition-all hover:scale-[1.01] duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
            Héctor Mauricio Cordero Oliva
          </h1>
          <p className="text-xl text-blue-100 text-center font-medium flex items-center justify-center gap-2">
            <Icon icon="vscode-icons:file-type-js-official" className="text-2xl" />
            Desarrollador Full Stack | Apasionado por la tecnología
          </p>
        </div>

        {/* About Section */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-8 pb-2 border-b border-blue-500 flex items-center justify-center">
            <Icon icon="fa6-solid:user" className="text-blue-400 mr-2" />
            Sobre mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="flex items-start">
                <Icon icon="ph:arrow-right-thin" className="text-blue-400 mr-2 text-xl mt-0.5" />
                Desarrollador apasionado con gran entusiasmo por aprender y crecer en el mundo tech.
              </p>
              
              <p className="flex items-start">
                <Icon icon="ph:arrow-right-thin" className="text-blue-400 mr-2 text-xl mt-0.5" />
                Especial interés en desarrollo web full stack y ciberseguridad.
              </p>
              
              <p className="flex items-start">
                <Icon icon="ph:arrow-right-thin" className="text-blue-400 mr-2 text-xl mt-0.5" />
                Autodidacta y proactivo, con experiencia en proyectos personales y colaborativos.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="flex items-start">
                <Icon icon="ph:arrow-right-thin" className="text-blue-400 mr-2 text-xl mt-0.5" />
                Me destaco por mi capacidad para resolver problemas y trabajar en equipo.
              </p>
              
              <p className="flex items-start">
                <Icon icon="ph:arrow-right-thin" className="text-blue-400 mr-2 text-xl mt-0.5" />
                Busco oportunidades para aplicar mis conocimientos en entornos profesionales.
              </p>
              
              <p className="flex items-start">
                <Icon icon="ph:arrow-right-thin" className="text-blue-400 mr-2 text-xl mt-0.5" />
                Comprometido con el aprendizaje continuo y mejora constante.
              </p>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-8 pb-2 border-b border-blue-500 flex items-center justify-center">
            <Icon icon="fluent:target-arrow-16-filled" className="text-blue-400 mr-2" />
            Metas profesionales
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-gray-850 transition-all">
              <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center">
                <Icon icon="carbon:skill-level-advanced" className="mr-2 text-xl" />
                Desarrollo Técnico
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Icon icon="mdi:circle-small" className="text-blue-400 mr-2 mt-1.5" />
                  Dominar el stack MERN (MongoDB, Express, React, Node.js)
                </li>
                <li className="flex items-start">
                  <Icon icon="mdi:circle-small" className="text-blue-400 mr-2 mt-1.5" />
                  Aprender arquitecturas de software escalables
                </li>
                <li className="flex items-start">
                  <Icon icon="mdi:circle-small" className="text-blue-400 mr-2 mt-1.5" />
                  Implementar mejores prácticas de clean code
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-gray-850 transition-all">
              <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center">
                <Icon icon="clarity:growth-line" className="mr-2 text-xl" />
                Crecimiento Profesional
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <Icon icon="mdi:circle-small" className="text-blue-400 mr-2 mt-1.5" />
                  Adquirir experiencia en entornos profesionales
                </li>
                <li className="flex items-start">
                  <Icon icon="mdi:circle-small" className="text-blue-400 mr-2 mt-1.5" />
                  Contribuir a proyectos con impacto social
                </li>
                <li className="flex items-start">
                  <Icon icon="mdi:circle-small" className="text-blue-400 mr-2 mt-1.5" />
                  Especializarme en ciberseguridad aplicada
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack Section (Nuevo) */}
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg p-8 mt-8 mb-5 border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-white mb-8 pb-2 border-b border-blue-500 flex items-center justify-center">
            <Icon icon="ion:hardware-chip-outline" className="text-blue-400 mr-2" />
            Tecnologías
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <Icon icon="logos:react" className="text-2xl mr-2" />
              <span>React</span>
            </div>
            <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <Icon icon="logos:nodejs" className="text-2xl mr-2" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <Icon icon="logos:javascript" className="text-2xl mr-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <Icon icon="logos:tailwindcss-icon" className="text-2xl mr-2" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <Icon icon="logos:mongodb" className="text-2xl mr-2" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl shadow-2xl p-6 mt-20 transform transition-all hover:scale-[1.01] duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
            Datos Personales
          </h1>
          <p className="text-xl text-blue-100 text-center font-medium flex items-center justify-center gap-2">
            <Icon icon="mdi:account-details" className="text-2xl" />
            Información profesional y de contacto
          </p>
        </div>

        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10">
          {/* Tarjeta de Información Personal */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-600 hover:border-blue-400 transition-all">
            <div className="flex items-center mb-6 pb-4 border-b border-blue-500/50">
              <Icon icon="mdi:card-account-details-outline" className="text-blue-400 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-white">Información Personal</h2>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start">
              <Icon icon="mdi:account" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Nombre completo</p>
                <p className="text-white font-medium">Héctor Mauricio Cordero Oliva</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon icon="mdi:cake" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Edad</p>
                <p className="text-white font-medium">18 años</p>
              </div>
            </div>
        
            <div className="flex items-start">
              <Icon icon="mdi:map-marker" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Ubicación</p>
                <p className="text-white font-medium">Ciudad de Guatemala, Guatemala</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon icon="mdi:email" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Correo electrónico</p>
                <a href="mailto:hectoroliva841@gmail.com" className="text-blue-400 font-medium hover:underline">
                  hectoroliva841@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta de Contacto */}
        <div className="bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-600 hover:border-blue-400 transition-all">
          <div className="flex items-center mb-6 pb-4 border-b border-blue-500/50">
            <Icon icon="mdi:contacts" className="text-blue-400 text-3xl mr-3" />
            <h2 className="text-2xl font-bold text-white">Contacto</h2>
          </div>
          
          <div className="space-y-5">
            <div className="flex items-start">
              <Icon icon="mdi:phone" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Teléfono</p>
                <a href="tel:+50236995236" className="text-white font-medium hover:text-blue-400">
                  +502 3699-5236
                </a>
              </div>
            </div>
              
            <div className="flex items-start">
              <Icon icon="mdi:linkedin" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/hector-cordero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:underline flex items-center"
                >
                  linkedin.com/in/hector-cordero
                  <Icon icon="mdi:open-in-new" className="ml-1 text-sm" />
                </a>
              </div>
            </div>
              
            <div className="flex items-start">
              <Icon icon="mdi:github" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a 
                  href="https://github.com/hcordero-2023253" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:underline flex items-center"
                >
                  github.com/hcordero-2023253
                  <Icon icon="mdi:open-in-new" className="ml-1 text-sm" />
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon icon="mdi:calendar-clock" className="text-blue-400 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">Disponibilidad</p>
                <p className="text-white font-medium">Tiempo completo</p>
              </div>
            </div>
          </div>
        </div>
        </div>       
        {/* Skills Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon icon="fluent:skills-24-regular" className="text-blue-400 mr-3" />
            Mis Habilidades Técnicas
          </h2>
          
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium flex items-center">
                    <Icon icon={skill.icon} className="text-xl mr-2" />
                    {skill.name}
                  </span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-300 h-3 rounded-full animate-grow"
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education and Experience Section */}
        <EducationExperience />
        {/* Quick Views Section */}
        <ProjectsGallery />
        {/* Project Portfolio Section */}
        <ProjectPortfolio />
        </div>
      </div>
    </div>
  )
}
