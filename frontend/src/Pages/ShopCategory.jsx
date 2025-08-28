import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="w-full bg-gradient-to-b from-white via-blue-50 to-pink-50 min-h-screen py-8">
      <img
        className="w-full max-h-64 object-cover rounded-3xl shadow-xl mb-10 border-4 border-blue-100"
        src={props.banner}
        alt=""
      />
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-2 sm:px-4 mb-8 gap-4">
        <p className="text-gray-700 text-base md:text-lg bg-white/70 px-4 py-2 rounded-full shadow font-medium">
          <span className="font-semibold text-blue-600">Showing 1 - 12</span> Out of 36 products
        </p>
        <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg border border-blue-200 cursor-pointer hover:bg-blue-50 transition">
          <span className="text-gray-700 font-semibold">Sort by</span>
          <img src={dropdown_icon} alt="" className="h-5 w-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i} className="flex justify-center items-stretch">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-extrabold text-lg shadow-xl hover:scale-105 hover:from-blue-700 hover:to-pink-600 transition-all duration-300 tracking-wide">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
