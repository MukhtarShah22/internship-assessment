import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

function ListingPage() {
// State to store the list of products
  const [products, setProducts] = useState([]);
// State to manage loading status
  const [loading, setLoading] = useState(true);
// State to handle any error messages
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the API when the component mounts
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);// Empty dependency array ensures this effect runs only once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Product Listing</h1>
    {/* Render the ProductList component, passing the products as a prop */}
      <ProductList products={products} />
    </div>
  );
}

export default ListingPage;