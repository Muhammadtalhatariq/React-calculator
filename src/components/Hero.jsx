import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-hero-pattern bg-cover">
        <Navbar />
        <div className="text-white h-[546px] flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="md:text-7xl text-3xl font-bold">
              Calorie Calculator
            </h1>
            <p className="text-center md:px-60 px-3 text-lg font-normal pt-3 ">
              The Calorie Calculator can be used to estimate the number of
              calories a person needs to consume each day. This calculator can
              also provide some simple guidelines for gaining or losing weight.
            </p>

            <label className="backdrop-opacity-10 z-10backdrop-invert bg-white/10 flex items-center  after:text-white  gap-2 mt-6 border border-white p-1 rounded-3xl px-2">
              <input
                type="search"
                className="bg-transparent outline-none text-white md:w-96 lg:w-[450px] w-40 "
                placeholder="Search"
              />
              <div className="bg-icon p-1 rounded-full text-white">
                <div>
                  <img className="size-4" src="/search.svg" alt="" />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
