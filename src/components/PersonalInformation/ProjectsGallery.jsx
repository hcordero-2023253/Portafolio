// Proyects.jsx
import { Icon } from '@iconify/react';
import { projects } from './projects'; // Importa los datos compartidos

export const ProjectsGallery = () => {
  return (
    <div className="py-12 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        <Icon icon="ph:image-square" className="inline mr-3 text-blue-400" />
        Vistas Rápidas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all">
            <img 
              src={project.image} 
              alt={`Captura de ${project.name}`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {/* Enlaces a repositorios */}
              <div className="space-y-2">
                {project.repositories.map((repo, index) => (
                  <a 
                    key={index}
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:underline text-sm"
                  >
                    <Icon icon={repo.type === 'frontend' ? 'ph:monitor' : repo.type === 'backend' ? 'ph:server' : 'ph:stack'} className="mr-2" />
                    {repo.type === 'frontend' ? 'Frontend' : repo.type === 'backend' ? 'Backend' : 'Repositorio'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};