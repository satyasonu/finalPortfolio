import React from "react";
import realstate from "../assets/assets/realestate.jpg";
import workimg from "../assets/assets/workImg.jpeg";
import monsterRolodex from '../assets/Monster-Rolodex.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: realstate,
    },
    {
      id: 2,
      src: workimg,
    },
    {
      id: 3,
      src: realstate,
    },
    {
      id: 4,
      src: workimg,
    },
    {
      id: 5,
      src: realstate,
    },
    {
      id: 6,
      src: monsterRolodex,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-30">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0">
        {portfolios.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="my work"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-05">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-05">
                  Code
                </button>
              </div>
            </div>
          
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
