import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
  
 
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";





export default function Navbar() {

    let [nav, setnav] = useState(false)
    
    let handleClick = () => {
        setnav(!nav)
    }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-cyan-300 text-white">
      <div>
        <h1 className="font-bold text-4xl hover:text-red-800 text-lime-950 ">
          Portfolio
        </h1>
      </div>

      <nav>
        <div className="hidden md:flex text-lime-950">
          <Link to="/" className="text-lg  hover:text-red-800">
            Home
          </Link>
          <Link to="/about" className="text-lg  hover:text-red-800">
            About
          </Link>
          <Link to="/skills" className="text-lg  hover:text-red-800">
            Skills
          </Link>
          <Link to="/experience" className="text-lg  hover:text-red-800">
            Experience
          </Link>
          <Link to="/contact" className="text-lg  hover:text-red-800">
            Contact{" "}
          </Link>
        </div>
      </nav>

      {/* Hansburger Icons */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Icons */}

      <div
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center"
        }
      >
        <Link to="/" className="py-6 text-4xl">
          Home
        </Link>
        <Link to="/about" className="py-6 text-4xl">
          About
        </Link>
        <Link to="/skills" className="py-6 text-4xl">
          Skills
        </Link>
        <Link to="/experience" className="py-6 text-4xl">
          Experience
        </Link>
        <Link to="/contact" className="py-6 text-4xl">
          Contact{" "}
        </Link>
      </div>

      {/*Social Icons */}

      <div className=" hidden  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center tems-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/dharaneeshoffl/"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center tems-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/dharaneeshoffl"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center tems-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-700 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncQtFWdJvFfZTHSrxrHHGKjDKwSSKtgKbNKxRlQzfDGptwNXkTzcjZtFhKGfKGsZZNpDt"
            >
              Mail <HiOutlineMail size={30} />{" "}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center tems-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-700 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1-p-FglkcAa9Hsecj8keewTETV2JaiZiF/view?usp=sharing"
            >
              Resume
              <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
