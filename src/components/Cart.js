import React from 'react';
import {Redirect} from 'react-router-dom';
import { useCartContext } from './context/CartContext';

const Cart = () => {
    const { cart, clearCart, providerLoading} = useCartContext();

    if (providerLoading) return <h2>Cargando</h2>;
    if(!cart.length) return <Redirect to='/' />;

    return (
        <div>
            {cart.map((item) => (
            <h2 key={item.id}>Producto: {item.title} - {item.quantity}</h2>
            ))}
            <h2>Total: ${cart.reduce((acc,  {quantity, price} ) => acc + quantity * price, 0).toFixed(2)}</h2>
            <button onClick={clearCart}> Vaciar Carrito </button>
        </div>
    )

}

export default Cart;