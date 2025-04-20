import React from "react";
import ExperienceItem from "./experienct-item";
import experienceList from "@/data/experience";

const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experienceList.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Experience;
