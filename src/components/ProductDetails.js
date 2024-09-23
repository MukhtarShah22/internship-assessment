import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="rating">Rating: {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</p>
      <p>{product.description}</p>
      <Link to="/">Back to Listing</Link>
    </div>
  );
}

export default ProductDetails;