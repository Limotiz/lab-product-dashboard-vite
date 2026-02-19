import React, { useState } from 'react';
import ProductList from './components/ProductList';



const App = () => {
  // product data
  const initialProducts = [
     { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ]

   // Store products in state so we can remove them
  const [products, setProducts] = useState(initialProducts);
  // managing filtering with state
  const[filter, setFilter] = useState("all")

  // Remove product function
  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
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
      <ProductList products={filteredProducts}  onRemove={handleRemove} />
    </div>
  );
};

export default App;
