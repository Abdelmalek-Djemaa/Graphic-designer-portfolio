import React from "react";
import hero from "../assets/hero.png";
import bg from "../assets/bg.webp"
import {FaDownload, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaSquareBehance} from "react-icons/fa6";
const Hero = () => {
    const handleDownload = () => {
        window.location.href = '/Abdelazize_fergani_cv.pdf';
    };
  const social_media = [
    <FaInstagram/>,
    <FaFacebook/>,
    <FaLinkedin/>,
    <FaSquareBehance />,
  ];
  return (
      <section
          id="home"
          className="h-full sm:h-screen relative flex flex-wrap justify-center items-center gap-20"
      >
          <div
              className="absolute inset-0 bg-center bg-cover transform rotate-180"
              style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="flex items-center justify-center max-w-sm sm:px-0 px-12 pt-20 z-[800]">
              <img src={hero} alt="" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center items-center max-w-lg text-center sm:mt-12 py-4 -mt-20 z-[800]">
              <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-green-400">
                  Hello Welcome!
                  <br />
                </span>
                I'm <span>Abdelazize</span>
              </h1>
              <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-2 font-bold text-gray-200 z-[800]">
                Graphic Designer
              </h4>
              <button className="btn-primary mt-8 cursor-pointer z-[800] hover:scale-105 duration-200" onClick={handleDownload}><FaDownload />Download CV</button>
              <div className="mt-6 text-3xl flex items-center justify-center gap-5 z-[800]">
                {social_media?.map((icon,index) => (
                  <div
                    key={index}
                    className="text-white hover:text-green-400 hover:scale-105 cursor-pointer duration-200 "
                  >
                      {icon}
                  </div>
                ))}
              </div>
          </div>
    </section>
  );
};

export default Hero;
