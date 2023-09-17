import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pb-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          Welcome to my portfolio website! A Front-End Developer with under a
          year of hands-on experience in HTML, CSS, JavaScript, React, and
          Node.js. applied these skills to create a travel pocket book website
          that seamlessly integrates with Google Maps API, resulting in a 5%
          reduction in average search time of location-based information.
          Deployed this project on cloud platform AWS, for efficient web hosting
          to optimize performance by 8%.
        </p>

        <br />

        <p className="text-xl">
          Version control plays a crucial role in my workflow, and I am
          well-versed in utilizing Git and GitHub to collaborate with teams and
          manage code effectively. Combining my project management background
          with my comprehensive technical skill set, I bring a unique
          perspective to web development. My passion lies in creating intuitive
          and visually appealing applications that not only meet client
          requirements but also enhance user experiences. Feel free to explore
          my portfolio and discover the diverse projects I have worked on. I am
          always excited to take on new challenges and collaborate on innovative
          projects that push the boundaries of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
