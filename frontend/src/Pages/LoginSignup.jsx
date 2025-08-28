import React, { useState } from "react";
import "../Pages/CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    const response = await fetch("https://ecommerce-mern-mauve.vercel.app/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      alert("Welcome User " + formData.username);
      window.location.replace("/"); //sending the user to home page
    } else {
      alert(responseData.error);
    }
  };

  const signup = async () => {
    const response = await fetch("https://ecommerce-mern-mauve.vercel.app/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      alert("Welcome User " + formData.username);
      window.location.replace("/"); //sending the user to home page
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-green-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {state}
        </h1>
        <div className="flex flex-col gap-4 mb-6">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        <button
          onClick={() => (state === "Sign Up" ? signup() : login())}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition mb-4"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="text-center text-gray-600 mb-4">
            Already have an account?{" "}
            <span className="text-pink-500 hover:underline cursor-pointer">
              <button onClick={() => setState("Login")}>Login Here</button>
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-600 mb-4">
            Create an Account?{" "}
            <span className="text-pink-500 hover:underline cursor-pointer">
              <button onClick={() => setState("Sign Up")}>Click Here</button>
            </span>
          </p>
        )}
        {state === "Sign Up" ? (
          <div className="flex items-center gap-2">
            <input type="checkbox" id="agree" className="accent-pink-500" />
            <label htmlFor="agree" className="text-gray-600 text-sm">
              I agree to the Terms and Conditions
            </label>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;

// import React from 'react'
// import '../Pages/CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type = "text" placeholder='Your Name'/>
//           <input type = "email" placeholder='Email Address'/>
//           <input type = "password" placeholder='Password'/>
//         </div>
//         <button>Continue</button>
//         <p className='loginsignup-login'>Already Have an account ? <span>Login Here</span></p>
//         <div className="loginsignup-agree">
//           <input type = "checkbox" name = '' id = ''/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup
