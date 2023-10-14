import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my masters in{" "}
        <span className="font-medium">Computer Application</span>, I got
        selected in Udacity Scholarship and learned{" "}
        <span className="font-medium">Front-End Web Development</span>. My
        favorite part of programming is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, React Native</span>
        .I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        enginer. I am currently learning{" "}
        <span className="font-medium">Typescript, NextJs, FramerMotion.</span>.
      </p>
    </motion.section>
  );
}
