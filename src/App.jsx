import React, { useState } from 'react';
import ProductList from './components/ProductList';



const App = () => {
  // product data
  const products = [
     { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ]

  // managing filtering with state
  const[filter, setFilter] = useState("all")

  // filtering products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === "available") return product.inStock;
    if (filter === "unavailable") return !product.inStock;
    return true
  })
  return (
    <div className="app-container">
      <h1>Product Dashboard</h1>
      {/* buttons onclick */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All Products</button>
        <button onClick={() => setFilter("available")}>Available</button>
        <button onClick={() => setFilter("unavailable")}>Out of Stock</button>
      </div>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
