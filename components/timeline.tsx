import { Briefcase, GraduationCap, Code2, Smartphone, Cloud, Rocket } from "lucide-react";

const timelineItems = [
  {
    year: "2019",
    title: "Starting Point",
    icon: <GraduationCap className="text-blue-500" />,
    description:
      "Bachelor’s Degree in Computer Science. Learned fundamentals: Data Structures, Algorithms, DBMS, Networking. Built first personal projects using C++ and Java.",
  },
  {
    year: "2020",
    title: "First Development Experience",
    icon: <Briefcase className="text-green-500" />,
    description:
      "Internship / First job. Worked on real-world projects. Learned Git, REST APIs, agile dev. Built CRUD apps with PHP and MySQL.",
  },
  {
    year: "2021",
    title: "Web Development",
    icon: <Code2 className="text-purple-500" />,
    description:
      "Full-Stack projects using Vue and Node.js. Built dashboards, CMS, e-commerce platforms. Improved UI/UX skills.",
  },
  {
    year: "2022",
    title: "Mobile Development",
    icon: <Smartphone className="text-pink-500" />,
    description:
      "React Native Developer. Built cross-platform apps with camera, maps, push notifications. Published apps internally and publicly.",
  },
  {
    year: "2023",
    title: "Frontend Leadership",
    icon: <Briefcase className="text-yellow-500" />,
    description:
      "Frontend Team Lead at STAR TECH 株式会社. Built Station-UI component library. Translated Figma to code. Managed team of 3+ designers/devs.",
  },
  {
    year: "2024",
    title: "Cloud & Growth",
    icon: <Cloud className="text-cyan-500" />,
    description:
      "Preparing for AWS Developer & Solutions Architect Associate. Built CI/CD pipelines. Learning DevOps skills.",
  },
  {
    year: "2025",
    title: "Creative Fusion",
    icon: <Rocket className="text-red-500" />,
    description:
      "Launched interactive shooting game overlay on portfolio site. Shared project with dev community. Open sourced on GitHub.",
  },
];

const Timeline = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-300">Experience</h2>
      <div className="relative border-l-2 border-gray-300">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full">
              {item.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-300">{item.year} – {item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;