import React, { useState, createContext, useContext, useEffect } from "react";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {

  const[all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('https://ecommerce-mern-mauve.vercel.app/allproducts')
    .then((res) => res.json())
    .then((data) => setAllProduct(data));

    if(localStorage.getItem('auth-token')) {
      fetch('https://ecommerce-mern-mauve.vercel.app/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json', // fixed
          'Content-Type': 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  },[]);

  const addToCart = (itemId) => {
    if(localStorage.getItem('auth-token')) {
      setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
      fetch('https://ecommerce-mern-mauve.vercel.app/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    } else {
      alert("Please login to add the item to cart");
    }
  };

  const removeFromCart = (itemId) => {
    if(localStorage.getItem('auth-token')) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      fetch('https://ecommerce-mern-mauve.vercel.app/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    }
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems) {
        if(cartItems[item] > 0) {
            totalItem += cartItems[item];
        }
    }
    if(localStorage.getItem('auth-token')) {
      return totalItem;
    } else {
      return 0;
    }
  }

  const contextValue = { getTotalCartItems, all_product, cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
