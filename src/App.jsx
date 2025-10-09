import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./Pages/ProductsPage";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="fixed top-0 left-0 w-full z-50">
          <NavBar />
        </div>

        <section className="flex flex-col h-screen mt-16 bg-[#fff0e6]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products-page" element={<ProductsPage />} />
          </Routes>
        </section>
       
      </div>
    </BrowserRouter>
  );
}
