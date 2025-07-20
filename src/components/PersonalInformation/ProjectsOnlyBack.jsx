// ProjectsOnlyBack.jsx
import { Icon } from '@iconify/react';
import { projectsBack } from './projectsBack';

export const ProjectsOnlyBack = () => {

  return (
    <>
      {projectsBack?.map((project) => (
        <div key={project.name} className="mb-20 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <p className="text-gray-400">{project.year}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {project.repositories
                  .filter(repo => repo.type === 'backend')
                  .map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 text-sm"
                    >
                      <Icon icon="ph:server" className="mr-2" />
                      Backend
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};