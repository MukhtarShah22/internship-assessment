import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link to="/">Back to Listing</Link>
    </div>
  );
}

export default ProductDetails;