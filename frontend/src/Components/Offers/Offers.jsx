import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-200 via-white to-pink-200 rounded-3xl shadow-2xl px-4 md:px-16 py-10 md:py-16 my-10 border border-blue-100">
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 md:mr-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 mb-2 drop-shadow-lg tracking-tight animate-pulse">
          EXCLUSIVE
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-wide">Offers For You</h2>
        <p className="text-base md:text-lg text-gray-600 mb-4 italic">ONLY ON BEST SELLERS PRODUCTS</p>
        <ul className="mb-8 pl-5 list-disc text-gray-700 text-sm md:text-base space-y-1">
          <li>🔥 Up to <span className="font-bold text-blue-600">60% OFF</span> on select items</li>
          <li>🎁 Free shipping on orders over <span className="font-semibold text-pink-600">$999</span></li>
          <li>⭐ Extra 10% cashback for members</li>
          <li>⏰ Limited time only! Don’t miss out.</li>
        </ul>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-pink-600 transition-all duration-300">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-pink-200 blur-2xl opacity-60 animate-pulse"></div>
          <img
            src={exclusive_image}
            alt="Exclusive Offer"
            className="relative w-56 md:w-96 max-w-full object-contain drop-shadow-2xl rounded-2xl border-4 border-white"
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-lg font-semibold animate-bounce">
            Best Seller
          </span>
        </div>
      </div>
    </div>
  )
}

export default Offers
