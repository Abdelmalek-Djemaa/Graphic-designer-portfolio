import React from "react";
import {SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiDavinciresolve} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <SiAdobephotoshop />,
      level: "Expert",
      count: 92,
    },
    {
      logo: <SiAdobeillustrator />,
      level: "Advance",
      count: 85,
    },
    {
      logo: <SiAdobeindesign />,
      level: "Intermediate",
      count: 75,
    },
    {
      logo: <SiDavinciresolve />,
      level: "Beginner",
      count: 40,
    },
  ];
  return (
    <section id="skills" className="py-12 pb-20 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-green-400">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-green-400 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-16 rounded-full"
            >
              <div
                  style={{
                    background: `conic-gradient(rgb(34, 197, 94) ${skill.count}%, #ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-green-400">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
