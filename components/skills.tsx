import React from "react";
import skillCategories from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mb-6 text-gray-300">Skills</h2>
      <ul className="space-y-6">
        {skillCategories.map((cat) => (
          <li key={cat.category}>
            <h3 className="text-xl font-semibold mb-4 text-gray-300">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-gray-300 px-3 py-1 rounded-full border border-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
