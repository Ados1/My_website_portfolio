import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Welcome to my portfolio website! I'm a former project manager in the
          construction industry who has successfully made the transition into
          the exciting world of technology. With a solid foundation in project
          management, I have expanded my skill set to become a versatile
          full-stack web developer, proficient in front-end technologies like
          HTML5, CSS3, JavaScript, ReactJS, Tailwind CSS, and MySQL. My journey
          into the tech industry didn't stop there—I have also delved into cloud
          technologies, particularly AWS, and even obtained the Cloud
          Practitioner certificate. This has allowed me to effectively leverage
          cloud services and infrastructure to create scalable and robust web
          applications. Additionally, I have honed my backend programming skills
          with Python, enabling me to handle server-side development and
          implement powerful functionalities.
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
