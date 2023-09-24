import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const productsData = [
  {
    id: 1,
    name: 'Teapot flowers',
    price: 12.99,
    image: 'https://png.pngtree.com/png-clipart/20220605/original/pngtree-brown-teapot-png-image_7954284.png',
  },
  {
    id: 2,
    name: 'Some Statue',
    price: 189.99,
    image: 'https://img.freepik.com/premium-psd/statue-roman-god-roman-empire-statue-png-clipart_888962-280.jpg?w=2000',
  },
  {
    id: 3,
    name: 'Candle',
    price: 1.99,
    image: 'https://i.pinimg.com/originals/a3/0b/a7/a30ba745c70a9edd1bd86a815739baf9.png',
  },
  ];

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>Product card</h1>
      <Container>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Container>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
