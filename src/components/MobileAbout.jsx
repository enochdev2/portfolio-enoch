import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
// import enoch from "../assets/enoch.jpg";
import {
  fadeIn,
  headContentAnimation,
  slideIn,
  textVariant,
} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    {/* <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    > */}
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

      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
    {/* </motion.div> */}
  </Tilt>
);

const MobileAbout = () => {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="">
          <motion.div
          // variants={textVariant()}
          >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            // variants={slideIn("left", "tween", 0.2, 1)}

            className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
           With a strong foundation in Web2 and Web3 development, I specialize in building scalable, secure, and user-centric applications that bridge the gap between traditional and decentralized systems. My expertise lies in designing and implementing streamlined processes that enhance operational efficiency and drive revenue growth.
            <br />
            {""}
            <br />

            As a Moderator and Community Leader for top-tier Web3 projects, I actively contribute to building vibrant and inclusive ecosystems. My role as a community moderator enhances my ability to manage discussions and ensure positive interactions within online communities, complementing my technical expertise.
            <br />
            {""}
            <br />

            My approach is grounded in delivering secure, efficient, and future-ready solutions tailored to client needs. In the Web3 space, I assist clients with advanced decentralized applications (dApps) and smart contracts, promoting transparency, productivity, and overall effectiveness. My proficiency spans diverse programming languages, including JavaScript, TypeScript, Solidity, Rust and Move, and is complemented by expertise with frameworks such as React.js, Next.js, Anchor, and Express.js.
            <br />
            {""}
            <br />

            💻 Expertise Highlights:
            <br />
            <span className="text-[#c7b6f7] mr-2 font-bold">
            Frontend Development:
            </span>
             Proficient in React, Next.js, and Tailwind CSS, creating intuitive and engaging user interfaces.
            <br />
            {""}
            <br /> 

            <span className="text-[#c7b6f7] mr-2 font-bold">
            Blockchain Development:
            </span> Skilled in Solidity, Solana, smart contracts, and dApp creation, with a focus on security, scalability, and innovative use cases.
            <br />
            {""}
            <br />

            <span className="text-[#c7b6f7] mr-2 font-bold">
            Backend Development:
            </span> Proficient in Node.js, Express.js, MongoDB, and PostgreSQL.
            <br />
            {""}
            <br />

           <span className="text-[#c7b6f7] mr-2 font-bold">
            Web3 Community Moderator:
            </span> As a Moderator and Community Leader for leading Web3 projects, I foster vibrant and supportive ecosystems.
            <br />
            {""}
            <br />
            <span className="text-[#c7b6f7] mr-2 font-bold">
            End-to-End Development:
            </span>
             Delivering seamless experiences through full-stack solutions and APIs for modern applications.
            <br />
            {""}
            <br />
            <span className="text-[#c7b6f7] mr-2 font-bold">
            📈 What Drives Me:
            </span>
            <br />
            I thrive on solving complex problems with elegant, cutting-edge solutions. Whether creating smart contracts, DeFi products, or dApps, mentoring blockchain enthusiasts, or building secure decentralized systems, my passion lies in empowering individuals and organizations through technology.

            <br />
            {""}
            <br />
            <span className="text-[#c7b6f7] mr-2 font-bold">
            📚 Educator at Heart:
            </span> 
            <br />
            As a tutor at the School of DApps, I focus on making blockchain technology accessible to everyone. I specialize in teaching Solidity, Solana, Aptos, and Sui, empowering aspiring developers to join the Web3 revolution through engaging and easy-to-follow tutorials.
            <br />
            {""}
            <br />
            <span className="text-[#c7b6f7] mr-2 font-bold">
            🌐 Vision:
            </span> 
            <br />
            To build innovative digital experiences that redefine how technology impacts lives, while contributing to the growth of the Web2 and blockchain ecosystem through education, tools, and collaboration.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MobileAbout, "mobileabout");
