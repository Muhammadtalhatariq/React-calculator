import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-hero-pattern bg-cover">
        <Navbar />
        <div className="text-white h-[546px] flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="md:text-6xl text-3xl font-bold">Calorie Calculator</h1>
            <p className="text-center md:px-36 px-3 md:text-xl text-lg font-medium pt-3 ">
              The Calorie Calculator can be used to estimate the number of
              calories a person needs to consume each day. This calculator can
              also provide some simple guidelines for gaining or losing weight.
            </p>
            <label className=" flex items-center bg-transparent text-white gap-2 mt-6 border border-white p-2 rounded-3xl px-4">
              <input type="text" className="bg-transparent outline-none md:w-96 w-60" placeholder="Search" />
            <div className="bg-button p-2 rounded-full text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70 "
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
