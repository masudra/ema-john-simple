import React from 'react';
import './Product.css'

const Product = (props) => {
    const {category,name,seller,price,img,ratings,ratingsCount,stock}= props.cProduct
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4>Name:{name}</h4>
            <p>Price: ${price}</p>
            <p>Seller{seller}</p>
            <p>Rating{ratingsCount}s</p>
            </div>
            <button className='add-btn'>Add To Cart</button>
         </div>
    );
};

export default Product;