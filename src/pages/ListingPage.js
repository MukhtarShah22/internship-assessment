import React, {useState, useEffect} from "react";
import axios from 'axios'
import { response } from "express";

function ListingPage(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(error =>{
            setError('Error fetching products.');
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return(
        <div>
            <h1>Product Listing</h1>
        </div>
    ); 
}

export default ListingPage;