import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProdcut from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className="admin flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/addproduct" element={<AddProdcut />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin
