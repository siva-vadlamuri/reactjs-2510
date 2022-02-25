import React from "react";
import Header from "./components/Header";
import ReducerHook from "./hooks/ReducerHook";
import Products from "./pages/products/Products";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/products/Product";
function App() {
  return (
    <div>
      <Header />
      {/* header */}
      {/* main  */}
      <Routes>
        <Route path="/" element={<p>Home Page Works</p>} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>

      {/* footer */}
    </div>
  );
}

export default App;
