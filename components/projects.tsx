import React from "react";
import SectionHeader from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader>My Personal Projects</SectionHeader>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;
