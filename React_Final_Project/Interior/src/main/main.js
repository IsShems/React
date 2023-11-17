import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Catalog } from './Catalog';
import { ShoppingCart } from './ShoppingCart';
import ProductDetailPage from './ProductDetailPage';  // Импортируйте ProductDetailPage

import './main.css';

export default function Main() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}
