import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r to-graylight from-graydark  ">
        <div className="navbar md:px-16 text-white border-b border-white  ">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="font-bold">home </a>
                </li>
                <li>
                  <a className="font-medium" href="">
                    fitness & health
                  </a>
                </li>
                <li>
                  <a className="font-medium"> calorie calculator</a>
                </li>
                <li>
                  <a className="font-medium" href="">
                    Other
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-bold">Logo Here</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="font-bold">home </a>
              </li>
              <li>
                <a className="font-medium" href="#">
                  fitness & health
                </a>
              </li>
              <li>
                <a className="font-medium"> calorie calculator</a>
              </li>
              <li>
                <a className="font-medium" href="">
                  Other
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end cursor-pointer">
            <a className=" bg-button text-white w-[132px] h-[32px] text-center flex justify-center items-center px-6 py-4 rounded-[40px]">
              Get Start
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
