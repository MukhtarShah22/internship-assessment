import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-card-content">
        <h3>{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="rating">Rating: {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</p>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductCard;