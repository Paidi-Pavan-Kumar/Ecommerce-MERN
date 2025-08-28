import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-xs p-4 flex flex-col items-center group">
      <Link to={`/product/${props.id}`} className="w-full flex justify-center items-center mb-3">
        <img
          src={props.image}
          alt={props.name}
          className="object-contain h-40 w-full rounded-xl bg-gradient-to-tr from-blue-100 to-pink-100 group-hover:scale-105 transition-transform duration-300"
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>
      <p className="text-base font-semibold text-gray-800 mb-2 text-center">{props.name}</p>
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="text-blue-600 font-bold text-lg">${props.new_price}</div>
        <div className="text-gray-400 line-through text-base">${props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
