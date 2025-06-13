import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
    

        <br /> <br />
        Dedicated software developer pursuing  MS in Computer Science at Binghamton University, Specialized in Full Stack development.
        <br /> <br />
        Key Projects:
        <br /> <br />
        1. AI-Powered Code Navigator: Full-stack AI tool for codebase navigation using natural language
        <br />Technologies: React, Node.js, Express.js, MongoDB, D3.js, OpenAI GPT, REST APIs
        <br /> <br />

        2. Petadopt: Web application leveraging AI for pet adoption matching. 
        <br />Technologies: Firebase, React, AI, Node.js, Express, MongoDB <br />
        <br /> <br />

        3. Library Management System TypeScript, React, Nodejs, TDD, and MongoDB.
        <br /> Technologies: TypeScript, React, Nodejs, TDD, and MongoDB Nodejs <br />
        <br /> <br />
        4. Game Street: Online game store featuring advanced cart management and JWT authentication
        <br />Technologies: React, Redux, Node.js, Express, MongoDB, JWT, REST APIs
        <br /> <br />
       


        Committed to leveraging technology to solve real-world problems and create impactful user experiences. Continuously expanding knowledge to contribute effectively to software development.
        <br /> <br />

  
        <b>Let's work together to bring your ideas to life!</b>
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
