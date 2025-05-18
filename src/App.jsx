import React from 'react'
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop/Shop.jsx";
import ProductOverView from "./pages/SingleProduct/SingleProductComponent/ProductOverView.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} />
        <Route path="shop" element={<Shop/>} />
          <Route path="ProductOverView" element={<ProductOverView/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App