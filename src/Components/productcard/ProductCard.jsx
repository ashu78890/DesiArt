// components/ProductCard.jsx
import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
