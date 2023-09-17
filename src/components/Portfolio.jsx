import React from "react";
import book from "../assets/travel demo.PNG";
import hero from "../assets/hero section (2).png";
import ecommerce from "../assets/ecommerce website (2).PNG";
import devj from "../assets/devjobs.PNG";
import comming from "../assets/coming-soon-text-grunge-background_91128-1643.avif";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: book,
      demo: "https://ados1.github.io/travelhandbook/",
      code: "https://github.com/Ados1/travelhandbook.git",
      detail:
        "A Travel HandBook to know important places near you, built with HTML5, CSS3, REACT JS, GOOGLE API & RAPID API. ",
    },
    {
      id: 2,
      src: hero,
      demo: "https://ados1.github.io/GH-AUTO/",
      code: "https://github.com/Ados1/GH-AUTO.git",
      detail: "Auto Workshop landing page using HTML5, CSS3 & JAVASCRIPT. ",
    },
    {
      id: 3,
      src: ecommerce,
      demo: "https://ados1.github.io/Ecommerce_website/",
      code: "https://github.com/Ados1/Ecommerce_website.git",
      detail: "Ecommerce Website landing page using HTML5 & CSS3. ",
    },
    {
      id: 4,
      src: devj,
      demo: "https://ados1.github.io/devjobs/",
      code: "https://github.com/Ados1/devjobs.git",
      detail: "Job portal Website  using HTML5 ,CSS3 & REACT JS. ",
    },
    {
      id: 5,
      src: comming,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white pb-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div>
          <p
            className="text-4xl font-bold in-line
          border-b-4 border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolio.map(({ id, src, code, demo, detail }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="  rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 ">{detail}</p>
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="blank"
                >
                  Live Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="blank"
                  // onClick={() => gtcode(code)}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
