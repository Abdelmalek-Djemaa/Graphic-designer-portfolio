import React, { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
      <nav
          className={`fixed py-2 w-full left-0 top-0 z-[999] ${
              sticky ? "bg-gray-900/80 " : "text-white"
          }`}
      >
        <div className="flex items-center justify-between">
          <div className="mx-7">
            <h4 className="text-2xl uppercase font-bold">
              Abd<span className="text-green-400">elaz</span>ize
            </h4>
          </div>
          <div className="text-white md:block hidden px-7 py-2 font-medium rounded-bl-full">
            <ul className="flex items-center gap-1 py-2 text-lg">
              {menuLinks.map((menu, i) => (
                  <li
                      key={i}
                      className={`px-6 hover:text-green-400 duration-200 relative ${
                          activeLink === menu.link ? "text-green-400" : ""
                      }`}
                  >
                    <a
                        href={menu.link}
                        onClick={() => setActiveLink(menu.link)}
                    >
                      {menu.name}
                    </a>
                    {activeLink === menu.link && (
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400"></span>
                    )}
                  </li>
              ))}
            </ul>
          </div>
          <div
              onClick={() => setOpen(!open)}
              className={`z-[999]  ${open ? "text-gray-100" : "text-gray-100"} text-3xl md:hidden m-6`}
          >
            <TiThMenuOutline size={25} />
          </div>
          <div
              className={`md:hidden text-white absolute w-[160px] h-screen border-green-400 border-l-4
          px-7 py-2 font-medium bg-gray-700 top-0 duration-300 rounded-l-full ${
                  open ? "right-0" : "right-[-100%]"
              }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-10 py-2 text-lg">
              {menuLinks.map((menu, i) => (
                  <li
                      onClick={() => {
                        setActiveLink(menu.link);
                        setOpen(false);
                      }}
                      key={i}
                      className={`px-6 hover:text-green-400 relative ${
                          activeLink === menu.link ? "text-green-400" : ""
                      }`}
                  >
                    <a href={menu.link}>{menu.name}</a>
                    {activeLink === menu.link && (
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400"></span>
                    )}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
