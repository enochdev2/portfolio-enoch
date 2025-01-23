import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <p className=" font-bold text-2xl w-full text-left underline text-purple-400"> Skills</p>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h4 className="text-center">{technology.name}</h4>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
