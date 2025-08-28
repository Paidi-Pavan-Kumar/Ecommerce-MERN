import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="flex flex-col md:flex-row gap-10 p-8 bg-white rounded-xl shadow-md">
            <div className="productdisplay-left flex flex-col gap-4 md:w-1/2">
                <div className="flex gap-2">
                    <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-md border" />
                    <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-md border" />
                    <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-md border" />
                    <img src={product.image} alt="" className="w-20 h-20 object-cover rounded-md border" />
                </div>
                <div>
                    <img src={product.image} alt="" className="w-full max-h-96 object-contain rounded-lg border" />
                </div>
            </div>
            <div className="productdisplay-right flex flex-col gap-4 md:w-1/2">
                <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                <div className="flex items-center gap-2">
                    <img src={star_icon} alt="" className="w-5 h-5" />
                    <img src={star_icon} alt="" className="w-5 h-5" />
                    <img src={star_icon} alt="" className="w-5 h-5" />
                    <img src={star_icon} alt="" className="w-5 h-5" />
                    <img src={star_dull_icon} alt="" className="w-5 h-5" />
                    <p className="ml-2 text-gray-500">(122)</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-lg line-through text-gray-400">${product.old_price}</div>
                    <div className="text-2xl font-semibold text-pink-500">${product.new_price}</div>
                </div>
                <div className="text-gray-600">
                    It's made from lightweight fabric and comes in ten colours. The lightweight fabric makes this voluminous new shape more flattering. The towers are made from tubes of lightweight fabric 1.4 meters in diameter.
                </div>
                <div>
                    <h1 className="text-lg font-semibold mb-2">Select Size</h1>
                    <div className="flex gap-3 mb-4">
                        <div className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-pink-100 transition">S</div>
                        <div className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-pink-100 transition">M</div>
                        <div className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-pink-100 transition">L</div>
                        <div className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-pink-100 transition">XL</div>
                        <div className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-pink-100 transition">XXL</div>
                    </div>
                    <button onClick = {() => addToCart(product.id)}className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition mb-4">
                        ADD TO CART
                    </button>
                    <p className="text-gray-700 mb-1"><span className="font-semibold">Category : </span>Women, T-shirt, Crop Top</p>
                    <p className="text-gray-700"><span className="font-semibold">Tags : </span>Modern , Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay


// import React from 'react'
// import star_icon from '../Assets/star_icon.png'
// import star_dull_icon from '../Assets/star_dull_icon.png'

// const ProductDisplay = (props) => {
//     const{product} = props;
//   return (
//     <div>
//       <div className="productdisplay-left">
//             <div>
//                 <img src = {product.image} alt = "" />
//                 <img src = {product.image} alt = "" />
//                 <img src = {product.image} alt = "" />
//                 <img src = {product.image} alt = "" />
//             </div>
//             <div>
//                 <img src = {product.image} alt = "" />
//             </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div>
//             <img src = {star_icon} alt = "" />
//             <img src = {star_icon} alt = "" />
//             <img src = {star_icon} alt = "" />
//             <img src = {star_icon} alt = "" />
//             <img src = {star_dull_icon} alt = "" />
//             <p>(122)</p>
//         </div>
//         <div>
//             <div>${product.old_price}</div>
//             <div>${product.new_price}</div>
//         </div>
//         <div>It's made from lightweight fabric and comes in ten colours. The lightweight fabric makes this voluminous new shape more flattering. The towers are made from tubes of lightweight fabric 1.4 meters in diameter.</div>
//         <div>
//             <h1>Select Size</h1>
//             <div>
//                 <div>S</div>
//                 <div>M</div>
//                 <div>L</div>
//                 <div>XL</div>
//                 <div>XXL</div>
//             </div>
//             <button>ADD TO CART</button>
//             <p><span>Category : </span>Women, T-shirt, Crop Top</p>
//             <p><span>Tags : </span>Modern , Latest</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDisplay

