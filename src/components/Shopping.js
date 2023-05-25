import React, { useState } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        setCartItems([...cartItems, item]);
    }

    function removeFromCart(item) {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
        setCartItems(updatedCartItems);
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Available Items</h3>
            <ul>
                <li>
                    Product A - $10
                    <button onClick={() => addToCart({ name: 'Product A', price: 10 })}>Add to Cart</button>
                </li>
                <li>
                    Product B - $20
                    <button onClick={() => addToCart({ name: 'Product B', price: 20 })}>Add to Cart</button>
                </li>
                <li>
                    Product C - $30
                    <button onClick={() => addToCart({ name: 'Product C', price: 30 })}>Add to Cart</button>
                </li>
            </ul>
        </div>
    );
}

export default ShoppingCart;
