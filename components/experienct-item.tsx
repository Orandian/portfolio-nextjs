import React from "react";

type ExperienceItemProps = {
  title: string;
  date: string;
  location: string;
  points: string[];
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, date, location, points }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date} | {location}</p>
      <ul className="mt-3 pl-5 list-disc space-y-1 text-base text-gray-700">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
