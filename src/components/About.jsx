import React from "react";
import hero from "../assets/hero.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "02" },
  ];
  return (
      <section
          id="about"
          className="h-full bg-center bg-cover flex flex-wrap-reverse justify-center items-center gap-20 px-4 pt-8 pb-24"
      >
        <div className="flex flex-col justify-center items-center max-w-lg text-center sm:mt-8 -mt-16">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-green-400">
                  About Me
                </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-2 font-bold text-gray-200">
            Graphic Designer
          </h4>
          <p className="text-center mt-4 leading-7 w-11/12 mx-auto">
            Hello! I'm Fergani abdelazize, a graphic designer from Algeria. I specialize in creating captivating designs that blend creativity with technical excellence. Let's collaborate to bring your ideas to life through thoughtful and impactful design solutions.
          </p>
          <div className="flex mt-6 items-center gap-7">
            {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-green-400">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center max-w-sm px-12 sm:p-0">
          <img src={hero} alt="" className="object-cover" />
        </div>
      </section>
  );
};

export default About;
