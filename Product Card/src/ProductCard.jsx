import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.h3`
  margin: 8px 0;
`;

const Price = styled.p`
  font-weight: bold;
  color: #333;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Button onClick={() => onAddToCart(product)}>Add to shopping cart</Button>
    </Card>
  );
};

export default ProductCard;
