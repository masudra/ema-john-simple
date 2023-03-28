import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import  './Shop.css'

const Shop = () => {
    const [products ,setproducts]=useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    return (
        <div className='shopediv'>
            <div className='cardinfo'>
                {
                    products.map(prodct => <Product key={prodct.id} cProduct={prodct}></Product>)
                }
            </div>

            <div>
                <h3> products Summary</h3>
            </div>
            
        </div>
    );
};

export default Shop;