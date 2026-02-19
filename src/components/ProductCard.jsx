import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ""}`}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <h2>{product.name}</h2>
      {/* TODO: Display product price */}
       <p>{product.price}</p>
      {/* TODO: Show if the product is in stock or out of stock */}
       <p className={product.inStock ? styles.inStock : styles.outOfStockText}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
