// pages/products.jsx
import React from 'react';
import './products.scss';
import ProductCard from '../../Components/productcard/ProductCard';

const dummyProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$120.00',
    image: '/product1.png',
  },
  {
    id: 2,
    name: 'Office Chair',
    category: 'Furniture',
    price: '$220.00',
    image: '/product2.png',
  },
  {
    id: 3,
    name: 'Running Shoes',
    category: 'Fashion',
    price: '$90.00',
    image: '/product3.png',
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
