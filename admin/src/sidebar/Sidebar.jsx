import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../assets/Product_Cart.svg'
import list_product_icon from '../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col pt-8 gap-5 w-full max-w-[250px] h-screen bg-white">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item flex items-center justify-center mx-5 py-1.5 px-2.5 rounded-lg bg-[#f6f6f6] gap-5 cursor-pointer hover:bg-blue-50 transition">
          <img src={add_product_icon} alt="" className="w-7 h-7" />
          <p className="text-base font-medium text-gray-700 hidden sm:block">Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item flex items-center justify-center mx-5 py-1.5 px-2.5 rounded-lg bg-[#f6f6f6] gap-5 cursor-pointer hover:bg-blue-50 transition">
          <img src={list_product_icon} alt="" className="w-7 h-7" />
          <p className="text-base font-medium text-gray-700 hidden sm:block">Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
