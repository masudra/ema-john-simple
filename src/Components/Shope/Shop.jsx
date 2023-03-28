import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import  './Shop.css'

const Shop = () => {
    const [products ,setproducts]=useState([]);
    const [cart ,setcart]=useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    const btnClickFun=(product)=>{
        const newcart =[...cart ,product]
        setcart(newcart)
        // console.log(product)
    }

    return (
        <div className='shopediv'>
            <div className='cardinfo'>
                {
                    products.map(prodct => <Product key={prodct.id} cProduct={prodct} btnclc={btnClickFun}></Product>)
                }
            </div>

            <div>
                <h3> Order Summary</h3>
                <p>Cart List : {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;