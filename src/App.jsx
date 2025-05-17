import React from 'react'
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import OurProduct from "./pages/Home/HomeComponent/OurProduct.jsx";
import Shop from "./pages/Shop/Shop.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} />
        <Route path="shop" element={<Shop/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App