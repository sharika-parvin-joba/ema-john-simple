import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setproducts]=useState([]);

     const [cart,setcart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    const handleAddToCart=(product)=>{
    //    cart.push(product)
    const newcart=[...cart,product]
    setcart(newcart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
              
              {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
              }
            </div>
            <div className="cart-container">
             <h3>This is cart</h3>
             <p>selected items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;