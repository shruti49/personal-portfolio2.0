import React from "react";
import SectionHeader from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";


const Projects = () => {
  return (
    <section>
      <SectionHeader>My Personal Projects</SectionHeader>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;
