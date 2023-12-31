import React from "react";

import resume from "../assets/Resume pic.jpg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white ">
            I'm a Front-End Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            My passion lies in acquiring extensive expertise in web development
            ,particularly in crafting visually captivating and user-friendly
            interfaces, and I am excited to apply my skills as a front-end
            developer to contribute to the creation of innovative web
            experiences.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={resume}
            alt="my profile"
            className="  rounded-2xl mx-auto w-2/3 md:w-full cursor-pointer  max-w-md  blur-sm hover:blur-none "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
