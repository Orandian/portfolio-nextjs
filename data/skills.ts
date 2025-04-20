type SkillCategory = {
    category: string;
    skills: string[];
  };
  
  const skillCategories: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Java", "PHP"]
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next js', 'Vue', 'Tailwind CSS', 'Inertia.js'],
    },
    {
      category: 'Mobile',
      skills: ['React Native', 'Expo', 'Responsive Design', 'Push Notifications', 'Offline Storage'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Laravel', 'Spring Boot', 'API Development'],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, S3, Lambda, RDS, CloudFront)',
        'GitHub Actions',
        'Docker',
        'CI/CD',
        'CloudWatch',
      ],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
    },
  ];

  export default skillCategories;