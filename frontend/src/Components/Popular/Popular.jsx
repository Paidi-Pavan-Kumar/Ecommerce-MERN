import {React, useState, useEffect } from "react";
import { Link} from "react-router-dom";

const Popular = () => {
  const [data_product, setDataProduct] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce-mern-mauve.vercel.app/popularinwomen")
      .then((res) => res.json())
      .then((data) => setDataProduct(data));
  }, []);

  return (
    <section className="w-full px-2 sm:px-4 py-12 bg-gradient-to-b from-white via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-2 tracking-wider drop-shadow">
          POPULAR IN WOMEN
        </h1>
        <hr className="border-t-2 border-blue-400 w-28 mx-auto mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data_product.map((item, i) => (
            <div
              className="flex justify-center items-stretch"
              key={item.id || i}
            >
              <Link
                to={`/product/${item.id}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-xs p-4 flex flex-col items-center group no-underline"
              >
                <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gradient-to-tr from-blue-100 to-pink-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain h-40 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                  {item.name}
                </h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-blue-600 font-bold text-xl">
                    ₹{item.new_price}
                  </span>
                  <span className="text-gray-400 line-through text-base">
                    ₹{item.old_price}
                  </span>
                </div>
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
