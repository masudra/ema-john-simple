import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart =props.cart

    let totalPrice = 0;
    let totalShip =0;
    for(const product of cart){
        totalPrice = totalPrice + product.cProduct.price;
        totalShip = totalShip + product.cProduct.shipping;
        // console.log(cProduct.price)
    }
    const tax =totalPrice*7/100;
    const grandtotal = totalPrice + totalShip + tax;
    return (
        <div className='cartcss'>
            <h3> Order Summary</h3>
                <h4>Cart List : {cart.length}</h4>
                <h4>Total Price: ${totalPrice}</h4>
                <h4>ShipingCost : ${totalShip}</h4>
                <h4>Tex: {tax}</h4>
                <h4>Grand Total : ${grandtotal}</h4>
            
        </div>
    );
};

export default Cart;