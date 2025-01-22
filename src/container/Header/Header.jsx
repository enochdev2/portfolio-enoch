import "./Header.css";
import Test from "../Test/Test";
import { useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";

import { styles } from "../../styles";

const Header = () => {
  const { scene } = useGLTF("./computer/scene.gltf");

  return (
    <div
      className=" lg:flex justify-between relative items-center min-h-screen  lg:px-[4rem] py-[4rem] lg:pt-0 md:pb-4 md:py-[]"
      id="home"
    >
      <div
        className={`absolute inset- top-[120px] lg:left-7 md:top-[80px] lg:top-[100px] z-10  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        <h1 className={`${styles.heroHeadText} text-[#c7b6f7]`}>
          I'm {""} <br />
          <span className="text-[#915EFF]">Enoch Promise</span> <br />
          <span className="lg:text-7xl text-[#c7b6f7]">
            A Full Stack Web, Mobile{" "}
          </span>
          <span className="lg:text-7xl text-[#c7b6f7]">
            <Typewriter
              options={{
                strings: " and Blockchain Developer",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p
          className={`${styles.heroSubText} mt-2 z-  text-white-100 max-w-3xl  overflow-hidden`}
        >
          I specialize in Web2 and Blockchain development, focusing on Web3
          technologies, smart contracts (
          <span className="text-[#c7b6f7]"> Solidity, Solana, Aptos, Sui</span>{" "}
          ), dApps, DeFi products, and Web3 community moderation.
        </p>
      </div>

      <div className="flex flex-2 w-[95%] md:w-[90%] mx-auto lg:w-[40%] justify-start items-start flex-col py-3 pl-3 md:-mt-0  ">
        {/* <div style={{ marginBottom: '1rem' }}>
        <p className="p__cormorant text-4xl bg-gradient-to-r from-[--color-golden] to-[--color-gray] px-4 ">TechArvel</p>
      </div> */}

        {/* <button type="button" className="custom__button bg-gradient-to-r from-[--color-gray] font-bold to-[--color-golden] text-2xl rounded-lg text-white border  border-l">
        <Link to='/contact'>
        Start Your Project 
        </Link> 
        </button> */}
      </div>

      <div className="app__wrapper_img mx-auto mt-3 mb-0  flex-1 w-[90%] lg:px-0 lg:w-[55%]">
        <Test scene={scene} />
      </div>
    </div>
  );
};

export default Header;
