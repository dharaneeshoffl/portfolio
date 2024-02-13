import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import About from "./About"
import Skills from "./Skills";
import Experience from "./Experience"
import Contact from './Contact';


export default function Home() {
  return (
    <div className="bg-[#0a192f] w-full h-screen">
      {/* Container*/}

      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold">Hello I am </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Dharaneesh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {" "}
          I am Front-End-Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am front-end-developer specializing in building land occasionally
          designing exceptional experiences.Currently I am focused on building
          responsive front-end web applications
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-700">
            <a href="https://drive.google.com/file/d/1-p-FglkcAa9Hsecj8keewTETV2JaiZiF/view?usp=sharing">
              View Work
            </a>
            <HiArrowNarrowRight className="ml-3 " />
          </button>
        </div>
      </div>
    </div>
  );
}
