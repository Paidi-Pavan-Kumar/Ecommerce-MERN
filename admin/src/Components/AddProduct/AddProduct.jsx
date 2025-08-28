import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
const AddProdcut = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("https://ecommerce-mern-mauve.vercel.app/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      await fetch("https://ecommerce-mern-mauve.vercel.app/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(product)
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Failed")
        });
    }
  };

  return (
    <div className="add-product max-w-xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg mt-8 flex flex-col gap-8 border border-blue-100">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-2 tracking-wide">
        Add New Product
      </h2>
      <div className="addproduct-itemfield flex flex-col gap-2">
        <p className="font-semibold text-purple-700">Product Title</p>
        <input
          type="text"
          value={productDetails.name}
          onChange={changeHandler}
          name="name"
          placeholder="Type here.."
          className="border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80 placeholder:text-purple-300"
        />
      </div>

      <div className="addproduct-price flex flex-col sm:flex-row gap-6">
        <div className="addproduct-itemfield flex flex-col gap-2 flex-1">
          <p className="font-semibold text-blue-700">Price</p>
          <input
            type="text"
            name="old_price"
            value={productDetails.old_price}
            onChange={changeHandler}
            placeholder="Type here"
            className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80 placeholder:text-blue-300"
          />
        </div>
        <div className="addproduct-itemfield flex flex-col gap-2 flex-1">
          <p className="font-semibold text-pink-700">Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={changeHandler}
            placeholder="Type here"
            className="border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/80 placeholder:text-pink-300"
          />
        </div>
      </div>

      <div className="addproduct-itemfield flex flex-col gap-2">
        <p className="font-semibold text-blue-700">Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80 text-blue-700"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield flex flex-col gap-4 items-center">
        <label htmlFor="file-input" className="cursor-pointer group">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img w-32 h-32 object-contain border-2 border-dashed border-blue-300 rounded-xl group-hover:border-pink-400 transition"
            alt=""
          />
          <span className="block text-xs text-gray-400 mt-1 group-hover:text-pink-400 transition">
            Click to upload image
          </span>
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          onChange={imageHandler}
        />
        <button
          onClick={Add_Product}
          className="addproduct-btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-2 rounded-full hover:from-pink-500 hover:to-blue-500 transition font-bold shadow-md tracking-wide"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProdcut;
