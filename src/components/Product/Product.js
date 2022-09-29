import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    
    const {name,img,seller,price,ratings}=product;
  
    return (
        
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>{seller}</p>
            <p>${price}</p>
            <p>{ratings}stars</p>
            </div>
            
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        
            
        </div>
       
    );
};

export default Product;