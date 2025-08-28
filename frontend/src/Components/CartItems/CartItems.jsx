import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((acc, item) => {
    if (cartItems[item.id] > 0) {
      return acc + item.new_price * cartItems[item.id];
    }
    return acc;
  }, 0);

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
      <div className="grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-3 mb-4 text-center">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="mb-4" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-6 gap-4 items-center text-center py-4">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-16 h-16 object-cover mx-auto rounded-md border"
                />
                <p className="font-medium">{e.name}</p>
                <p className="text-pink-600 font-semibold">${e.new_price}</p>
                <button className="px-3 py-1 border rounded-lg bg-gray-100">
                  {cartItems[e.id]}
                </button>
                <p className="font-semibold">
                  ${e.new_price * cartItems[e.id]}
                </p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow">
          <h1 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Subtotal</p>
              <p className="font-semibold text-gray-800">${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Shipping Fee</p>
              <p className="font-semibold text-green-600">Free</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Total</p>
              <p className="font-bold text-pink-600">${total.toFixed(2)}</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow">
          <p className="mb-3 text-gray-700">If you have a promo code, Enter it here</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
