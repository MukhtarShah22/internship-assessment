import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';

function ProductPage() {
// State to store the details of a single product
  const [product, setProduct] = useState(null);
// State to manage loading status
  const [loading, setLoading] = useState(true);
// State to handle any error messages
  const [error, setError] = useState(null);
// Extract the id parameter from the URL
  const { id } = useParams();

  useEffect(() => {
// Fetch details of a specific product when the component mounts or id changes
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching product details. Please try again later.');
        setLoading(false);
      });
  }, [id]);// Dependency array includes id to refetch when it changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      {/* Render the ProductDetails component, passing the product as a prop */}
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductPage;