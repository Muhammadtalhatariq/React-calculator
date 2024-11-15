import React, { useState } from "react";

const Calculator = () => {
  const [age, setage] = useState(18);
  const [Weight, setWeight] = useState(40);
  const [Height, setHeight] = useState(140);
  const [activity, setactivity] = useState("Moderate Exercise 4-5 Times/Week");
  const [genter, setgenter] = useState("male");
  const [data, setdata] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setdata({ age, Weight, Height, activity, genter });
    console.log(data);
  };

  return (
    <>
      <div className="md:mx-20 mx-8  mb-20 bg-white">
        <div className="w-full bg-white">
          <div className="flex relative rounded-[40px] text-black shadow-xl bg-white">
            <ul className=" absolute -top-20 flex gap-16 bg-white p-3 mx-4 px-10 md:w-[550px] rounded-xl shadow-xl path h-20">
              <li className="text-buttonsec font-bold leading-6 cursor-pointer">
                Us Units
              </li>
              <li className="text-buttonb font-bold leading-6 cursor-pointer">
                Metric Units
              </li>
              <li className="text-buttonsec  font-bold leading-6 cursor-pointer">
                Other Units
              </li>
            </ul>
          </div>
          <div className="relative mx-4 text-black bg-white">
            <div className="  absolute -top-[50px] rounded-[40px] rounded-tl-none shadow-xl bg-white ">
              <form onSubmit={handleSubmit} action="">
                <div className="flex md:flex-nowrap flex-wrap  bg-white">
                  <div className="flex flex-wrap text-sm gap-x-2 md:w-[680px] mx-8">
                    <div className="flex flex-col flex-wrap items-center gap-x-1 text-black mx-3 pt-8">
                      <div className="flex justify-between md:w-72  ">
                        <span className="text-lg font-bold ">Age</span>{" "}
                        <div>
                          <span className="text-buttonb">{age}</span> /
                          <span className="text-buttonsec">80</span>{" "}
                        </div>
                      </div>
                      <input
                        type="range"
                        min={6}
                        max={80}
                        value={age}
                        className="cursor-pointer md:w-72 appearance-none range"
                        onChange={(e) => {
                          setage(e.target.value);
                        }}
                      />
                      <div className=" flex justify-between md:w-72 text-sm">
                        {" "}
                        <p className="text-buttonsec">18</p>{" "}
                        <p className="text-buttonsec">80</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-x-1 text-black mx-3 pt-8 ">
                      <div className="flex justify-between md:w-72  ">
                        <span className="text-lg font-bold ">Weight</span>{" "}
                        <div>
                          <span className="text-buttonb">{Weight}</span>/
                          <span className="text-buttonsec">150</span>{" "}
                        </div>
                      </div>
                      <input
                        type="range"
                        min={40}
                        max={150}
                        value={Weight}
                        className="cursor-pointer md:w-72 range "
                        onChange={(e) => {
                          setWeight(e.target.value);
                        }}
                      />
                      <div className=" flex justify-between md:w-72 text-sm">
                        <p className="text-buttonsec">40</p>{" "}
                        <p className="text-buttonsec">150</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-x-1 text-black m-3">
                      <div className="flex justify-between md:w-72  ">
                        <span className="text-lg font-bold ">Height</span>{" "}
                        <div>
                          <span className="text-buttonb">{Height}</span>/
                          <span className="text-buttonsec">220</span>{" "}
                        </div>
                      </div>
                      <input
                        type="range"
                        min={140}
                        max={220}
                        value={Height}
                        className="cursor-pointer md:w-72 outline-none range"
                        onChange={(e) => {
                          setHeight(e.target.value);
                        }}
                      />
                      <div className=" flex justify-between md:w-72 text-sm">
                        {" "}
                        <p className="text-buttonsec">140</p>{" "}
                        <p className="text-buttonsec">220</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-x-1 text-black bg-white m-3">
                      <div className="flex flex-col justify-between md:w-72  ">
                        <span className="text-lg font-bold ">Activity</span>{" "}
                        <div
                          className=" outline-none  md:w-[320px] p-3 font-semibold "
                          name=""
                          id=""
                        >
                          <div className="flex flex-nowrap gap-6 rounded-full shadow-2xl">
                            <div
                              value={activity}
                              onChange={(e) => {
                                setactivity(e.target.value);
                              }}
                              className="  outline-none p-2 font-semibold"
                            >
                              Moderate Exercise 4-5 Times/Week
                            </div>
                            <div className="flex justify-center items-center">
                              <img src="/down.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-x-1 text-black m-3">
                      <div>
                        <div className="flex justify-start md:w-72  ">
                          <span className="text-lg font-bold ">Gender</span>{" "}
                        </div>

                        <div className="flex ">
                          <div className="">
                            <label className="label cursor-pointer gap-2 custom-radio">
                              <input
                                value={genter}
                                onChange={(e) => {
                                  setgenter(e.target.value);
                                }}
                                type="radio"
                                name="radio-10"
                                className=" "
                                defaultChecked
                              />
                              <span className="label-text">Male</span>
                            </label>
                          </div>
                          <div className="">
                            <label className="label cursor-pointer gap-2 custom-radio">
                              <input
                                value={genter}
                                onChange={(e) => {
                                  setgenter(e.target.value);
                                }}
                                type="radio"
                                name="radio-10"
                                className=" "
                              />
                              <span className="label-text">Female</span>
                            </label>
                          </div>
                          <div className="">
                            <label className="label cursor-pointer gap-2 custom-radio">
                              <input
                                value={genter}
                                onChange={(e) => {
                                  setgenter(e.target.value);
                                }}
                                type="radio"
                                name="radio-10"
                                className="outline-none"
                              />
                              <span className="label-text"> Other</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-x-1 text-black m-3">
                      <div>
                        <div className="navbar-end cursor-pointer">
                          <button
                            type="Submit"
                            className=" bg-buttonb text-white w-[122px] h-[32px] text-center flex justify-center items-center px-6 py-3 rounded-[40px]"
                          >
                            Calculate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="m-4 flex flex-col gap-2">
                    <div>
                      <h1>Exercise</h1>
                      <div className="flex justify-center items-center px-4 border rounded-xl border-buttonsec gap-2 md:w-[20rem]">
                        <div className="w-10 h-8 bg-icon rounded-full  flex justify-center items-center">
                          <img src="/icon2.svg" alt="" />
                        </div>
                        <div className="font-normal text-sm">
                          <p>15-30 minutes of elevated heart rate activity.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1>Intense exercise</h1>
                      <div className="flex justify-center items-center px-4 border rounded-xl border-buttonsec gap-2 md:w-[20rem]">
                        <div className="w-10 h-8 bg-icon rounded-full border-4 flex justify-center items-center">
                          <img src="/icon2.svg" alt="" />
                        </div>
                        <div className="font-normal text-sm">
                          <p>45-120 minutes of elevated heart rate activity.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1>Very intense exercise</h1>
                      <div className="flex justify-center items-center px-4 border rounded-xl border-buttonsec gap-2 md:w-[20rem]">
                        <div className="w-10 h-8 bg-icon rounded-full border-4 flex justify-center items-center">
                          <img src="/icon2.svg" alt="" />
                        </div>
                        <div className="font-normal text-sm">
                          <p> 2+ hours of elevated heart rate activity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Calculator;
