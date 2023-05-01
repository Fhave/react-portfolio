import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">Iyobosa</span> Omoruyi <br />
            MERN Developer
          </h1>

          {/* <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p> */}

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/Fhave_07"
              className="pr-1 inline-block text-accent hover:text-white"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://github.com/Fhave"
              className="pr-1 inline-block text-accent hover:text-white"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/iyobosa.omoruyi/"
              className="pr-1 inline-block text-accent hover:text-white"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/iyobosa-omoruyi-26863623a/"
              className="pr-1 inline-block text-accent hover:text-white"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://www.instagram.com/fhave_07/"
              className="pr-1 inline-block text-accent hover:text-white"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent border-0 rounded border-[#7477FF] text-white px-6 py-3 hover:opacity-80"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;