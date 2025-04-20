export type Project = {
    title: string;
    description: string;
    techStack: string[];
    liveDemo: string;
    github: string;
  };
  
  const projects: Project[] = [
    {
      title: 'Project Name 1',
      description: 'A brief description of the project, explaining its purpose and key features.',
      techStack: ['React', 'Node.js', 'AWS'],
      liveDemo: '#', // Replace with actual URL
      github: '#', // Replace with actual URL
    },
    {
      title: 'Project Name 2',
      description: 'A brief description of the project, explaining its purpose and key features.',
      techStack: ['React Native', 'Firebase', 'Express.js'],
      liveDemo: '#', // Replace with actual URL
      github: '#', // Replace with actual URL
    },
    // Add more projects as needed
  ];

  export default projects;