import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon  from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 pt-10 pb-4 px-4 mt-10 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src={footer_logo} alt="" className="h-14 w-auto mb-2" />
          <p className="text-xl font-bold text-blue-700 tracking-wider">Pavazon</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-700 font-medium text-base mb-6 md:mb-0">
          <li className="hover:text-blue-600 transition">Company</li>
          <li className="hover:text-blue-600 transition">Products</li>
          <li className="hover:text-blue-600 transition">Offices</li>
          <li className="hover:text-blue-600 transition">About</li>
          <li className="hover:text-blue-600 transition">Contact</li>
        </ul>
        <div className="flex gap-4">
          <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
            <img src={instagram_icon} alt="" className="h-6 w-6" />
          </div>
          <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
            <img src={pintester_icon} alt="" className="h-6 w-6" />
          </div>
          <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
            <img src={whatsapp_icon} alt="" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <hr className="border-t-2 border-blue-200 w-full mb-2" />
        <p className="text-center text-gray-500 text-sm">
          Copyright @ 2025 - All Right Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
