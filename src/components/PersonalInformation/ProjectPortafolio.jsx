// ProjectPortfolio.jsx
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { projects } from './projects'; // Mismos datos importados

export const ProjectPortfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="py-12 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <Icon icon="ph:stack" className="inline mr-3 text-blue-400" />
          Portafolio de Proyectos
        </h2>

        {projects.map((project) => (
          <div key={project.name} className="mb-20 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            {/* Header con enlaces a repositorios */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-gray-400">{project.year}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {project.repositories.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 text-sm"
                    >
                      <Icon icon={repo.type === 'frontend' ? 'ph:monitor' : repo.type === 'backend' ? 'ph:server' : 'ph:stack'} className="mr-2" />
                      {repo.type === 'frontend' ? 'Frontend' : repo.type === 'backend' ? 'Backend' : 'Repo'}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};