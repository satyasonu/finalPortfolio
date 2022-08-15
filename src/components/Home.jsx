import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import myImage from "../assets/bg-profile.jpg";
const Home = () => {
  return (
    <div
      name="home"
      className={`h-screen w-full text-white bg-gradient-to-b from-gray-800 to-black`} >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a frontend Developer
          </h2>
          <p className="">
            I have 1 year of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React , Tailwind.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="my Profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
