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
      {
          icon:<FaInstagram/>,
          link:"https://www.instagram.com/abdelaziz_fergani/"
      },
      {
          icon:<FaFacebook/>,
          link:"https://web.facebook.com/profile.php?id=100094083653905"
      },
      {
          icon:<FaLinkedin/>,
          link:"https://www.linkedin.com/in/fergani-abdelaziz-421401282/"

      },
      {
          icon:<FaSquareBehance/>,
          link:"https://www.behance.net/ferganiabdelaziz"
      },
  ];
  return (
      <section
          id="home"
          className="h-screen relative flex flex-wrap justify-center items-center p-8 sm:gap-20 gap-0"
      >
          <div
              className="absolute inset-0 bg-center bg-cover transform rotate-180"
              style={{ backgroundImage: `url(${bg})` }}
          />
          <img src={hero} alt="" className="object-cover max-w-sm w-full z-[800] pt-8 px-4" />
          <div className="flex flex-col justify-center items-center max-w-lg text-center z-[800] pb-12 pt-2">
              <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-green-400 md:text-5xl text-3xl">
                  Hello Welcome!
                  <br />
                </span>
                I'm <span>Abdelazize</span>
              </h1>
              <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-2 font-bold text-gray-200 z-[800]">
                Graphic Designer
              </h4>
              <br/>
              <button className="btn-primary cursor-pointer z-[800] hover:scale-105 duration-200" onClick={handleDownload}><FaDownload />Download CV</button>
              <div className="mt-6 text-3xl flex items-center justify-center gap-5 z-[800]">
                {social_media?.map((item,index) => (
                  <div
                    key={index}
                    className="text-white hover:text-green-400 hover:scale-105 cursor-pointer duration-200 "
                  >
                      <a href={item.link}>{item.icon}</a>
                  </div>
                ))}
              </div>
          </div>
    </section>
  );
};

export default Hero;
