import React from "react";

function ProductList({ products }){
    return(
        <div className="product-list">
            {products.map(product =>(
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    );
}

export default ProductList;