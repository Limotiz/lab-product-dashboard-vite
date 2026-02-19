import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  
   // Checking  if the product list is empty
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      {/* Rendering a ProductCard for eah product*/}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
