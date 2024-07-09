import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Kingdoms at war",
      behance_link: "https://www.behance.net/gallery/201634127/Kingdoms-at-war",
    },
    {
      img: project2,
      name: "Frozen Ship",
      behance_link: "https://www.behance.net/gallery/201793949/Forzen-Ship",
    },
    {
      img: project3,
      name: "book cover design",
      behance_link: "https://www.behance.net/gallery/185763953/book-cover-design-",
    },
    {
      img: project4,
      name: "Mango juice (photo manipulation)",
      behance_link: "https://www.behance.net/gallery/201383329/Mango-juice-(photo-manipulation)",
    },
  ];

  return (
      <section id="projects" className="py-16 text-white px-4">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-green-400">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
        </div>
        <br />
        <div className="w-full pt-8 sm:px-12">
          <Swiper
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
          >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-fit p-4 bg-slate-700 rounded-xl">
                      <div className="rounded-lg w-full h-72 bg-center bg-cover"
                           style={{ backgroundImage: `url(${project.img})` }}></div>
                    <h3 className="text-xl my-4">{project.name}</h3>
                    <div className="flex gap-3">
                      <a
                          href={project.behance_link}
                          className="text-green-400 bg-gray-800 px-2 py-1 inline-block rounded-lg"
                      >
                        Behance
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
};

export default Project;
