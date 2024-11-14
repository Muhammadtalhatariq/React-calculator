import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-footer">
        <footer className="footer text-white p-10 border-b border-white">
          <aside>
            <h1 className=" text-4xl font-bold">Logo Here</h1>
            <p className="w-80 text-sm font-normal">
              We coded and developed each calculator individually and put each
              one through strict, comprehensive testing.
            </p>
          </aside>
          <nav>
            <h6 className="text-lg text-white font-semibold ">Quick Links</h6>
            <a className="link link-hover font-medium">Home</a>
            <a className="link link-hover font-medium"> fitness & health</a>
            <a className="link link-hover font-medium">calorie calculator</a>
            <a className="link link-hover font-medium"> Other</a>
          </nav>

          <nav>
            <h6 className="text-lg text-white font-semibold">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-red-600 flex justify-center items-center">
                <img className="" src="/fb.png" alt="" />
              </div>

              <div className="w-10 h-10 rounded-full bg-white text-red-600 p-2">
                <img src="/instra.png" alt="" />
              </div>

              <div className="w-10 h-10 rounded-full bg-white text-red-600 p-2">
                <img src="/xlogo.png" alt="" />
              </div>
            </div>
          </nav>
        </footer>
        <footer className="footer footer-center  text-white p-3">
          <aside>
            <p>
              2024 All CopyRight Reserved.
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
