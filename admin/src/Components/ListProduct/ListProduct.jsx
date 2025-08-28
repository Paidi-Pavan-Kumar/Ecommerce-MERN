import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://ecommerce-mern-mauve.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("https://ecommerce-mern-mauve.vercel.app/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product max-w-5xl mx-auto p-2 sm:p-4 bg-white rounded-xl shadow mt-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        All Products List
      </h1>
      {/* Header row: hidden on xs, visible on sm+ */}
      <div className="hidden sm:grid grid-cols-6 gap-2 bg-blue-50 rounded-lg px-4 py-2 font-semibold text-blue-800 text-sm md:text-base">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts mt-2 space-y-3">
        <hr className="mb-2" />
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-2 sm:grid-cols-6 gap-2 items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg px-2 sm:px-4 py-3 text-gray-700 text-xs md:text-base"
          >
            {/* Product image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt=""
                className="w-12 h-12 object-contain rounded-lg border border-gray-200 bg-white"
              />
            </div>
            {/* Product name */}
            <div>
              <span className="sm:hidden font-semibold text-blue-800">
                Title:{" "}
              </span>
              <span className="truncate">{product.name}</span>
            </div>
            {/* Old price */}
            <div className="hidden sm:block">
              <span className="line-through text-red-400">
                ${product.old_price}
              </span>
            </div>
            
            <div className="hidden sm:block">
              <span className="font-bold text-green-600">
                ${product.new_price}
              </span>
            </div>
            {/* Category */}
            <div className="hidden sm:block">
              <span className="capitalize">{product.category}</span>
            </div>
            {/* Remove icon */}
            <div className="flex justify-center items-center">
              <img
                onClick={() => remove_product(product.id)}
                src={cross_icon}
                alt=""
                className="w-6 h-6 cursor-pointer hover:scale-110 transition"
              />
            </div>
            {/* Mobile-only: show price/category below name */}
            <div className="col-span-2 flex flex-wrap gap-2 sm:hidden justify-between items-center mt-1">
              <span className="line-through text-red-400">
                ${product.old_price}
              </span>
              <span className="font-bold text-green-600">
                ${product.new_price}
              </span>
              <span className="capitalize bg-blue-100 px-2 py-1 rounded text-blue-700">
                {product.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
