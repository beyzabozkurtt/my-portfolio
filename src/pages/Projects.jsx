// projects.jsx
import React from "react";
import Slider from "react-slick";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiNestjs,
  SiMongodb,
  SiOpenai,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiFirebase,
} from "react-icons/si";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";

import masai1 from "../assets/masai1.png";
import masai2 from "../assets/masai2.png";
import masai3 from "../assets/masai3.png";
import ecooil1 from "../assets/ecooil1.png";
import ecooil2 from "../assets/ecooil2.png";
import ecooil3 from "../assets/ecooil3.png";
import salon1 from "../assets/13.png";
import salon2 from "../assets/12.png";
import salon3 from "../assets/11.png";
import salon4 from "../assets/10.png";
import salon5 from "../assets/9.png";
import zchat1 from "../assets/zchat1.png";
import zchat2 from "../assets/zchat2.png";

const salonSlides = [salon1, salon2, salon3, salon4, salon5];
const zchatSlides = [zchat1, zchat2];
const masaiSlides = [masai1, masai2, masai3];
const ecooilSlides = [ecooil1, ecooil2, ecooil3];

const Projects = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const projects = [
    {
      slides: masaiSlides,
      title: t("projects.project1.title"),
      role: t("projects.project1.role"),
      desc: t("projects.project1.description"),
      github: "https://github.com/beyzabozkurtt/masal-backend",
      tech: [
        { icon: <SiReact title="React Native" />, color: "#61dafb" },
        { icon: <SiNestjs title="NestJS" />, color: "#ea2845" },
        { icon: <SiMongodb title="MongoDB" />, color: "#4db33d" },
        { icon: <SiOpenai title="OpenAI" />, color: "#10a37f" },
      ],
    },
    {
      slides: ecooilSlides,
      title: t("projects.project2.title"),
      role: t("projects.project2.role"),
      desc: t("projects.project2.description"),
      github: "https://github.com/beyzabozkurtt/ecooil-server",
      tech: [
        { icon: <SiReact title="React Native" />, color: "#61dafb" },
        { icon: <SiLaravel title="Laravel" />, color: "#f55247" },
        { icon: <SiSqlite title="SQLite" />, color: "#1379a4ff" },
      ],
    },
    {
      slides: salonSlides,
      title: t("projects.project3.title"),
      role: t("projects.project3.role"),
      desc: t("projects.project3.description"),
      github: "https://github.com/beyzabozkurtt/salon-app",
      tech: [
        { icon: <SiReact title="ReactJS" />, color: "#61dafb" },
        { icon: <FaNodeJs title="NodeJS" />, color: "#4db33d" },
        { icon: <SiMysql title="MySQL" />, color: "#00618a" },
      ],
    },
    {
      slides: zchatSlides,
      title: t("projects.project4.title"),
      role: t("projects.project4.role"),
      desc: t("projects.project4.description"),
      github: "https://github.com/beyzabozkurtt/z-chat",
      tech: [
        { icon: <SiReact title="ReactJS" />, color: "#61dafb" },
        { icon: <SiFirebase title="Firebase" />, color: "#f9e55e" },
      ],
    },
  ];

  return (
    <section id="projects" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center sm:text-left">
          {t("projects.title")}
        </h2>

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-[#f5f5f5] hover:shadow-2xl transition-all duration-500 rounded-3xl px-6 sm:px-8 py-10 sm:py-12 flex flex-col lg:flex-row items-center gap-10 mb-16 hover:scale-[1.015] hover:bg-white"
          >
            <div className="w-full lg:w-1/2 relative">
              <Slider {...settings}>
                {project.slides.map((img, i) => (
                  <div key={i} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Mockup ${i + 1}`}
                      className="w-full max-w-[500px] h-auto rounded-xl mx-auto"
                    />
                  </div>
                ))}
              </Slider>
              <p className="text-center text-sm text-gray-400 mt-6 sm:hidden">
                {t("projects.swipeInstruction")}
              </p>
            </div>

            <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{project.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{project.desc}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
              >
                <FaGithub className="inline-block mr-2" />
                GitHub
              </a>

              <div className="flex justify-center lg:justify-start gap-5 text-3xl pt-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="transition duration-300 hover:scale-125"
                    style={{ color: tech.color }}
                  >
                    {React.cloneElement(tech.icon, {
                      className: "hover:text-current",
                    })}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

function PrevArrow({ onClick }) {
  return (
    <button
      className="hidden md:flex absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-2xl text-gray-500 hover:text-black"
      onClick={onClick}
      aria-label="Previous"
    >
      <MdArrowBackIos />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      className="hidden md:flex absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-2xl text-gray-500 hover:text-black"
      onClick={onClick}
      aria-label="Next"
    >
      <MdArrowForwardIos />
    </button>
  );
}

export default Projects;
