"use client"

import React from 'react'

const AboutMe = () => {
  // const experienceText = useMemo(() => {
  //   const startDate = new Date(2021, 5); // June 2021
  //   const now = new Date();

  //   const diffInMs = now.getTime() - startDate.getTime();
  //   const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  //   const roundedToOneDecimal = Number(diffInYears.toFixed(1));
  //   const intPart = Math.trunc(roundedToOneDecimal);

  //   return roundedToOneDecimal === intPart
  //     ? `${intPart} years`
  //     : `over ${intPart} years`;
  // }, []);
  return (
    <section className="space-y-4 text-gray-400">
      <p>
        I&apos;m a passionate software engineer with over 4 years of
        experience building user-friendly and scalable web and mobile
        applications. I specialize in frontend development using React, Next js, React
        Native, and Vue, and also work with backend technologies like Node.js,
        Laravel, and Spring Boot to create complete end-to-end solutions.
      </p>
      <p>
        Based in Tokyo, I lead both frontend and mobile projects—crafting
        custom component libraries, collaborating closely with designers, and
        delivering clean, responsive, and pixel-perfect UIs. My experience
        extends to backend development, where I enjoy designing APIs, managing
        databases, and ensuring smooth integration across the stack.
      </p>
      <p>
        Whether it&apos;s launching a mobile app, developing a full-stack
        product, or optimizing performance, I&apos;m always excited to solve
        problems and build intuitive digital experiences.
      </p>
    </section>
  )
}

export default AboutMe