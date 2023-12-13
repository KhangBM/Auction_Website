import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="container">
            <div className="info">
                <b><h1>SHOPPING CART</h1></b>
                <a href="#">Send us your comments</a>
            </div>
            <div className="body">
                <b><h1>Time to Start Shopping</h1></b>
                <Link to="/home" className="gotohome">
                    <button>SHOPPING START</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
