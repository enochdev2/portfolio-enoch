import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, Mobiletechnologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <p className=" font-bold text-4xl w-full text-left underline text-[#915EFF]">
        {" "}
        Skills
      </p>
      {!isMobile ? (
        <div className="flex flex-row gap-y-16 flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28 " key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <h4 className="text-center text-lg font-bold">
                {technology.name}
              </h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row gap-y-16 flex-wrap justify-center gap-8">
          {Mobiletechnologies.map((technology) => (
            <div className="w-28 h-28 " key={technology.name}>
              <div className="rounded-lg overflow-hidden w-24 h-24">
                <img
                  className="w-full h-full"
                  src={technology.icon}
                  alt="technology icon"
                />
              </div>
              <h4 className="text-center text-lg font-bold">
                {technology.name}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
