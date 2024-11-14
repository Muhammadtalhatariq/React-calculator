import React from "react";

const cart = [
  {
    id: 1,
    title: "BMI Calculator",
    image: "/bmi.png",
  },
  {
    id: 2,
    title: "Body Fat Calculator",
    image: "/body.png",
  },
  {
    id: 3,
    title: "BMR Calculator",
    image: "/bmr.png",
  },
  {
    id: 4,
    title: "Ideal Weight Calculator",
    image: "/ideal.png",
  },
  {
    id: 5,
    title: "Pace Calculator",
    image: "/pace.png",
  },
  {
    id: 6,
    title: "Pregnancy Calculator",
    image: "/pregnancey.png",
  },
  {
    id: 7,
    title: "Conception Calculator",
    image: "/conception.png",
  },
  {
    id: 8,
    title: "Due Date Calculator",
    image: "/duedate.png",
  },
];

const Card = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col my-20 md:mt-80 mt-[50rem]">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Fitness & Health Calculators
        </h1>
        <div>
          <div className="flex justify-center flex-wrap gap-4 mt-20">
            {cart.map((item) => (
              <div
                key={item.id}
                className=" bg-base-100 w-72 h-32 shadow-2xl text-center my-6 rounded-xl "
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="relative flex justify-center items-center ">
                    <div className=" absolute -top-8  w-20 h-20 rounded-full bg-iconcol flex justify-center items-center">
                      <div className="">
                        <img className="" src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="absolute top-16">
                      <p className="block w-60 font-semibold">{item.title}</p>
                      <a
                        className=" text-button underline font-medium"
                        href="#"
                      >
                        Try Calculator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
