import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
       const studCad =  getShoppingCart()
       const saveCard =[];
        //  step 1
       for(const id in studCad ){
        // step 2
       const addProduct = products.find(product => product.id === id)
        
      if(addProduct){
        // step 3
       const quantity = studCad[id];
       addProduct.quantity =quantity;
       saveCard.push(addProduct);
    }
       console.log(addProduct)
    
    }
    setcart(saveCard);
},[products])

    const btnClickFun=(product)=>{
        const newcart =[...cart ,product]
        setcart(newcart)
        addToDb(product.cProduct.id)
    }

    return (
        <div className='shopediv'>
            <div className='cardinfo'>
                {
                    products.map(prodct => <Product key={prodct.id} cProduct={prodct} btnclc={btnClickFun}></Product>)
                }
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;