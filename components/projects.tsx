import Link from 'next/link';
import projects, { Project } from '@/data/project';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Tech Stack:</p>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <li key={index} className="px-3 py-1 text-sm text-white bg-gray-600 rounded-full">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-4 py-3 flex justify-between items-center border-t">
        <Link href={project.liveDemo}>
          <p className="text-blue-600 hover:underline">Live Demo</p>
        </Link>
        <Link href={project.github}>
          <p className="text-blue-600 hover:underline">GitHub</p>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
        <p className="text-lg text-gray-600 mt-2">
          Here are some of the projects I have worked on.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
