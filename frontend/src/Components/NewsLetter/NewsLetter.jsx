import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 rounded-2xl shadow-lg px-4 py-10 md:py-16 flex flex-col items-center my-10">
      <h1 className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center drop-shadow">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-6 text-center">
        Subscribe to our newsletter and stay updated
      </p>
      <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Your Email Id"
          className="flex-1 px-4 py-3 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-700 shadow"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-pink-600 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
