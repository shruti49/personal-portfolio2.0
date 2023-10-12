import React from "react";
import ProjectCard from "./project-card";
import { projectsData } from "@/lib/data";
import SectionHeader from "./section-heading";
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
