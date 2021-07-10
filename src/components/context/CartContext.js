import axios from "axios";
import { createContext, createElement, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});


export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([]);
    const [database, setDatabase] = useState([]);

    const clearCart = () => setCart([]);
    const inCart = id => cart.some(item => item.id === id);
    const addToCart = (item, quantity) => {
        if (inCart(item.id)){
            const newCart = cart.map( cartItem => { 
                if(cartItem === item.id){
                    return {... cartItem, quantity: cartItem.quantity + quantity }
                }else return cartItem;
            })
            setCart([]);
        }else {
            
            setCart(prev => [... prev, {item, quantity}])
        }

    }

    useEffect(() => {
        (async () => {
          const { data } = await axios.get("https://fakestoreapi.com/products")
         
          setDatabase(data)
        })();
    
      }, []);

    return <CartContext.Provider value={{cart, setCart, addToCart, clearCart, database}}>
        {children}
    </CartContext.Provider>
}