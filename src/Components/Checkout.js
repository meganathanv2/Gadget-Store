import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        if (!name || !address || !paymentMethod) {
            alert("Please fill out all fields before placing the order.");
            return;
        }
        setOrderPlaced(true);
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <label className="checkout-label" htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                className="checkout-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label className="checkout-label" htmlFor="address">Address:</label>
            <input
                type="text"
                id="address"
                className="checkout-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <label className="checkout-label" htmlFor="paymentMethod">Payment Method:</label>
            <input
                type="text"
                id="paymentMethod"
                className="checkout-input"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
            />

            <button className="checkout-button" onClick={handlePlaceOrder}>Place Order</button>

            {orderPlaced && <p className="order-success-message">Your order is successfully placed!</p>}
        </div>
    );
}

export default Checkout;
