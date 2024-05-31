import React, { useContext } from 'react';
import "./Cart.css"
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';
import CartContext from '../../context/CartContext';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity , 0).toFixed(2);

  return (
    <div className="cart">
        <h3 className="cart-title">Your Shopping Cart</h3>
        <div className="cart-wrapper">
            <div className="cart-items">
                {cartItems.map((item) => 
                    <CartItem 
                      key={item.id} 
                      addToCart={addToCart} 
                      removeFromCart={removeFromCart} 
                      item={item}
                    />
                )}
            </div>
            <OrderSummary totalPrice={totalPrice} />
        </div>
    </div>
  );
};

export default Cart;