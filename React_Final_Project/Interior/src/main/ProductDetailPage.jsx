import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToShoppingCart } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import './ProductDetailPage.css';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); 
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === parseInt(productId));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.log('Product not found');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [productId]);

  const handleAddToShoppingCart = (product) => 
  {
    dispatch(addToShoppingCart(product))
  }

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div  className="places">
      <img className="photo" src={product.photo} alt="Product" />
      <div>
        <h1>{product.name}</h1>
        <h4>{product.price}$</h4>
        <p>{product.description}</p>
        <button className="btn" onClick={() => handleAddToShoppingCart(product)}> Add to Shopping Cart</button>
     </div>
    </div>
  );
}

export default ProductDetailPage;
