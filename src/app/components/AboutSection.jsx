"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define a map of logos for each skill
const skillLogos = {
  ReactJs: "/images/react-original.svg",
  NextJS: "/images/next.svg",
  JavaScript: "/images/js.svg",
  "Tailwind CSS" :"/images/tailwind.png",
  "C++": "/images/C++.png",
  MongoDB: "/images/mongo.png",
  Firebase:"/images/fire.png"
  // Add logos for other skills as needed
};

const SkillItem = ({ skill }) => (
  <div className="flex items-center mb-2">
    {skillLogos[skill] && (
      <Image src={skillLogos[skill]} width={30} height={30} alt={skill} />
    )}
    <span className="ml-2">{skill}</span>
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="list-disc pl-2">
        {["ReactJs", "NextJS", "JavaScript", "Tailwind CSS", "C++", "MongoDB", "Firebase"].map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in ECE - SLIET University (2018-2021)</li>
        <li>BTech in CSE - KIIT University (2021-2024)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express,
           HTML, CSS, and Git. I am a quick learner and always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
