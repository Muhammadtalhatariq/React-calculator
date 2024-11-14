import React, { useState } from "react";

const Calculator = () => {
  const [age, setage] = useState(18);
  const [Weight, setWeight] = useState(40);
  const [Height, setHeight] = useState(140);
  const [activity, setactivity] = useState("Moderate exercise 4-5 times/week");
  const [genter, setgenter] = useState("male");
  const [data, setdata] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setdata({ age, Weight, Height, activity, genter });
    console.log(data);
  };

  return (
    <>
      <div className="md:mx-20 mx-8 relative mb-20">
        <div className="bg-base-100 absolute -top-20 w-full  rounded-xl text-black shadow-xl">
          <div className="">
            <ul className="flex gap-20 p-3 mx-4">
              <li className="text-buttonsec font-bold leading-6 cursor-pointer">Us Units</li>
              <li className="text-button font-bold leading-6 cursor-pointer">Metric Units</li>
              <li className="text-buttonsec font-bold leading-6 cursor-pointer">
                Other Units
              </li>
            </ul>
            <form onSubmit={handleSubmit} action="">
              <div className="flex md:flex-nowrap flex-wrap">
                <div className="flex flex-wrap text-sm gap-x-2 md:w-[680px] mx-8">
                  <div className="flex flex-col flex-wrap items-center gap-x-1 text-black mx-3 pt-8">
                    <div className="flex justify-between md:w-72  ">
                      <span className="text-lg font-bold ">Age</span>{" "}
                      <div>
                        <span className="text-button">{age}</span>/80{" "}
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
                      <p>18</p> <p>80</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-x-1 text-black mx-3 pt-8 ">
                    <div className="flex justify-between md:w-72  ">
                      <span className="text-lg font-bold ">Weight</span>{" "}
                      <div>
                        <span className="text-button">{Weight}</span>/150{" "}
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
                      <p>40</p> <p>150</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-x-1 text-black m-3">
                    <div className="flex justify-between md:w-72  ">
                      <span className="text-lg font-bold ">Height</span>{" "}
                      <div>
                        <span className="text-button">{Height}</span>/220{" "}
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
                      <p>140</p> <p>220</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-x-1 text-black m-3">
                    <div className="flex  flex-col justify-between md:w-72  ">
                      <span className="text-lg font-bold ">Activity</span>{" "}
                      <select
                        className=" rounded-full shadow-xl bg-base-100 outline-none p-2 md:w-72 px-3"
                        name=""
                        id=""
                      >
                        <option
                          value={activity}
                          onChange={(e) => {
                            setactivity(e.target.value);
                          }}
                          className=" rounded-full shadow-xl bg-base-100 outline-none"
                        >
                          Moderate exercise 4-5 times/week
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-x-1 text-black m-3">
                    <div>
                      <div className="flex justify-start md:w-72  ">
                        <span className="text-lg font-bold ">Gender</span>{" "}
                      </div>

                      <div className="flex ">
                        <div className="">
                          <label className="label cursor-pointer">
                            <span className="label-text">Male</span>
                            <input
                              value={genter}
                              onChange={(e) => {
                                setgenter(e.target.value);
                              }}
                              type="radio"
                              name="radio-10"
                              className="radio checked:bg-button"
                              defaultChecked
                            />
                          </label>
                        </div>
                        <div className="">
                          <label className="label cursor-pointer">
                            <span className="label-text">Female</span>
                            <input
                              value={genter}
                              onChange={(e) => {
                                setgenter(e.target.value);
                              }}
                              type="radio"
                              name="radio-10"
                              className="radio checked:bg-button"
                            />
                          </label>
                        </div>
                        <div className="">
                          <label className="label cursor-pointer">
                            <span className="label-text">Other</span>
                            <input
                              value={genter}
                              onChange={(e) => {
                                setgenter(e.target.value);
                              }}
                              type="radio"
                              name="radio-10"
                              className="radio checked:bg-button"
                            />
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
                          className=" bg-button text-white w-[122px] h-[32px] text-center flex justify-center items-center px-6 py-3 rounded-[40px]"
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
                      <div className="w-10 h-8 bg-icon rounded-full flex justify-center items-center">
                        <img src="/form-icon.png" alt="" />
                      </div>
                      <div className="font-normal text-sm">
                        <p>15-30 minutes of elevated heart rate activity.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Intense exercise</h1>
                    <div className="flex justify-center items-center px-4 border rounded-xl border-buttonsec gap-2 md:w-[20rem]">
                      <div className="w-10 h-8 bg-icon rounded-full flex justify-center items-center">
                        <img src="/form-icon.png" alt="" />
                      </div>
                      <div className="font-normal text-sm">
                        <p>45-120 minutes of elevated heart rate activity.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Very intense exercise</h1>
                    <div className="flex justify-center items-center px-4 border rounded-xl border-buttonsec gap-2 md:w-[20rem]">
                      <div className="w-10 h-8 bg-icon rounded-full flex justify-center items-center">
                        <img src="/form-icon.png" alt="" />
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
    </>
  );
};

export default Calculator;
