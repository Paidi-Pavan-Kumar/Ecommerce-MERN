import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
  const { product } = props;
  return(
    <div className="breadcrum flex items-center gap-2 text-gray-600 text-sm font-medium py-4 px-2">
        HOME 
        <img src={arrow_icon} alt="" className="w-3 h-3 inline-block" /> 
        SHOP 
        <img src={arrow_icon} alt="" className="w-3 h-3 inline-block" /> 
        {product.category} 
        <img src={arrow_icon} alt="" className="w-3 h-3 inline-block" />
        {product.name}
    </div>
  );
};

export default Breadcrum;

// import React from "react";
// import arrow_icon from "../Assets/breadcrum_arrow.png"

// const Breadcrum = (props) => {
//   const { product } = props;
//   return(
//     <div className="breadcrum">
//         HOME <img src = {arrow_icon} alt = ""/> SHOP <img src = {arrow_icon} alt = "" /> {product.category} <img src = {arrow_icon} alt = "" />
//     </div>
//   );
// };

// export default Breadcrum;

