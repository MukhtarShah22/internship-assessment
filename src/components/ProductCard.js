import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
        {/* Product image */}
      <img src={product.image} alt={product.title} />
      <div className="product-card-content">
        {/* Product title */}
        <h3>{product.title}</h3>
        {/* Product price, formatted to 2 decimal places */}
        <p className="price">${product.price.toFixed(2)}</p>
        {/* Product rating, with rate formatted to 1 decimal place */}
        <p className="rating">Rating: {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</p>
        {/* Link to the product's detail page */}
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductCard;