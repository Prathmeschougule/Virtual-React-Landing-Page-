import React from "react";
import { testimonials } from "../Constant";
import { IndentDecrease } from "lucide-react";

function Testomonial() {
  return (
    <div className="mt-20 tracking-wider">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What pepole are saying{" "}
      </h1>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((Testomonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900  rounded-lg p-6 text-md border border-neutral-800 font-thin">
              {Testomonial.text}
              <div className="flex mt-8 items-center  ">
                <img
                  className="w-10 h-10 mr-6 border border-neutral-500 rounded-full "
                  src={Testomonial.image}
                  alt=""
                />
                <div>
                  <h6>{Testomonial.user}</h6>
                  <span className="text-sm  text-neutral-400 font-normal">{Testomonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testomonial;
