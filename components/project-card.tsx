import React from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <motion.div
      // ref={ref}
      // style={{
      //   scale: scaleProgess,
      //   opacity: opacityProgess,
      // }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-odd:pl-8 dark:text-white d">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 da">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-odd:group-hover:translate-x-3
      group-odd:group-hover:translate-y-3
      group-odd:group-hover:rotate-2

      group-odd:right-[initial] group-odd:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;