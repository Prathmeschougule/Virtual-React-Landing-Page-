import React from "react";
import { features } from "../Constant";

function FeaturSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="font-medium text-sm h-6 py-2 px-3 bg-gray-800 rounded-full text-orange-700 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:5xl lg:6xl mt-10 lg:mt-20 tracking-widest">
          Easy To Build
          <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
            {"  "}Your Code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 ">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2  lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturSection;