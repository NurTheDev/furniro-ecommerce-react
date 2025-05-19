import React from 'react'
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} />
        <Route path="shop" element={<Shop/>} />
          <Route path="singleProduct" element={<SingleProduct/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App