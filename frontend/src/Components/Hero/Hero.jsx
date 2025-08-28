import React from "react";
import "./Hero.css";
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-8 gap-8 md:gap-0 bg-gradient-to-r from-blue-100 via-white to-pink-100">
      <div className="flex flex-col items-start w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">New Arrivals Only</h2>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <p className="uppercase text-blue-600 font-semibold tracking-wide">new</p>
            <img src={hand_icon} alt="" className="h-6 w-6" />
          </div>
          <p className="text-xl md:text-2xl font-semibold text-gray-700">Collections</p>
          <p className="text-lg text-gray-500">for everyone</p>
        </div>
        <div className="flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
          <div className="font-medium">Latest Collection</div>
          <img src={arrow_icon} alt="" className="h-5 w-5" />
        </div>
      </div>
      <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={hero_image}
          alt=""
          className="w-full max-w-[180px] sm:max-w-xs md:max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
