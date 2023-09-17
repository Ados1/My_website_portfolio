import React from "react";

import html from "../assets/Html.png";
import css from "../assets/css33.png";
import javascript from "../assets/logo-javascript-logo-png-transparent.png";
import reactjs from "../assets/js-icon-logo-icon-react-icon-react-js-icon-turquoise-teal-aqua-symbol-circle-png-clipart.jpg";
import tailwind from "../assets/Tailwind.png";
import jsnode from "../assets/NODE.png";
import mysql from "../assets/SQL.png";
import aws from "../assets/aws.png";
import pythonj from "../assets/Python-logo-notext.svg.png";
import gitg from "../assets/GitHub-Mark.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactjs,
      title: "React Js",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailwindCss",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: jsnode,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: mysql,
      title: "MySql",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: gitg,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 10,
      src: pythonj,
      title: "Python",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen pt-20  "
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full text-white ">
        <div className="pb-6 ">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6">These are the technologies i have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
