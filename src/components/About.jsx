import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Omoruyi Iyobosa. I am a
            MERN Developer. I build websites using the MERN Stack. I am interested in all things related to coding and software development.
          </p>
          <p className="pb-5">
            I like creating things from scratch and coming up with solutions that make people's lives easier. I am proficient in Frontend skills like React.js, Axios, Tailwind CSS,, Css3 and many more. In backend I know Node.js, Express.js, MongoDB, and Mongoose
          </p>

          <p>
            I'm always looking for ways to improve my skills and stay up-to-date with the latest trends and technologies. I'm excited to see where my coding journey takes me and what projects I'll be working on next.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;