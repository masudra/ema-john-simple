import React from 'react';
import './Heder.css'
import logo from '../.././images/Logo.svg'

const Heder = () => {
    return (
        <nav className='navbare'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="/order">Order</a>
                <a href="/revew">Revew</a>
                <a href="/about">About</a>
                <a href=".login">Login</a>
            </div>
            
        </nav>
    );
};

export default Heder;