"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const How = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [selected, setSelected] = useState("Goals");

  const handleClick = (title: string) => {
    setSelected(title);
  };

  return (
    <div
      className="min-h-[72vh] w-full max-w-[88rem] py-32 z-[100]"
      data-aos="fade-up"
    >
      <h1 className="text-white md:text-5xl text-4xl font-bold text-center mb-4">
        About{" "}
        <span className="text-transparent bg-gradient-to-r from-primary to-green-200 bg-clip-text">
          Prototype
        </span>
      </h1>
      <div className="w-full flex justify-center my-8">
        <button className="flex items-center justify-center p-1 rounded-full bg-black/50 backdrop-blur ml-3 gap-1">
          <span
            className={`text-md flex justify-center items-center bg-white rounded-full duration-200 p-3 font-medium ${
              selected === "Goals"
                ? "bg-opacity-100 text-black "
                : "bg-opacity-0 text-white/50"
            }`}
            onClick={() => handleClick("Goals")}
          >
            Goals
          </span>
          <span
            className={`text-md flex justify-center items-center bg-white rounded-full duration-200 p-3 font-medium ${
              selected === "Benefits"
                ? "bg-opacity-100 text-black "
                : "bg-opacity-0 text-white/50"
            }`}
            onClick={() => handleClick("Benefits")}
          >
            Benefits
          </span>
        </button>
      </div>
      <div className="max-w-[950px] mx-auto overflow-hidden px-8">
        {selected === "Goals" ? (
          <p
            className={`text-center text-white/75 md:text-lg text-sm leading-[24px] my-8 `}
          >
            We dream of a cleaner world. That's why we made ANTI, a small robot
            with a big job. ANTI picks up trash and helps people care about the
            environment. It's fun to watch and makes cleaning exciting. Imagine
            walking in a park and seeing ANTI rolling towards some litter. With
            its funny moves, it seems to say, "Hey, help me clean this up!"
            Without thinking, you might pick up the trash too. That's ANTI's
            power - changing our habits bit by bit, in a fun way. ANTI also
            helps cities understand trash problems better. We hope it will
            inspire people, especially kids, to keep our world clean.
          </p>
        ) : (
          <p className="text-center text-white/75 md:text-lg text-sm leading-[24px] my-8">
            The ANTI robot collects trash by making sounds and using body
            movements to get people's attention. This helps people notice and
            pick up trash. It works well in places like parks. ANTI also teaches
            people about keeping the environment clean through its fun
            interactions. By picking up trash and making people more aware, ANTI
            helps create a cleaner and healthier world, improving everyone's
            health and quality of life.
          </p>
        )}
      </div>
    </div>
  );
};

export default How;
