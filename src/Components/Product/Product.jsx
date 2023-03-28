import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {category,name,seller,price,img,ratings,ratingsCount,stock}= props.cProduct
    const btnClickFun =props.btnclc
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4>Name:{name}</h4>
            <p>Price: ${price}</p>
            <p>Seller{seller}</p>
            <p>Rating{ratingsCount}s</p>
            </div>
            <button onClick={()=>btnClickFun(props)} className='add-btn'>Add To Cart
            const element  <FontAwesomeIcon icon={faCartShopping} />
</button>
         </div>
    );
};

export default Product;