import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Related Products</h1>
      <hr className="mb-6 border-pink-200" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts


// import React from 'react'
// import data_product from '../Assets/data'

// const RelatedProducts = () => {
//   return (
//     <div>
//       <h1>Related Products</h1>
//       <hr />
//       <div>
//         {data_product.map((item, i) => {
//             return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default RelatedProducts

