import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});


export const useCartContext = () => useContext(CartContext);    // Contexto

export const CartProvider = ({children}) => {               //Provider


    const [cart, setCart] = useState([]);                                   // Set del carrito
    const [productsInCart, setProductsInCart] = useState(0);                // Cantidad de Productos en el carrito
    const [providerLoading, setProviderLoading] = useState(true);           // Loading del Carrito

    
    const inCart = id => cart.some(item => item.id === id);

    const clearCart = () => setCart([]);

    const addToCart = (item, quantity) => {
        if (inCart(item.id)){
            const newCart = cart.map( cartElement => { 
                if(cartElement === item.id){
                    return {...cartElement, quantity: cartElement.quantity + quantity }
                }else return cartElement;
            })
            setCart(newCart);
        }else {
            
            setCart(prev => [...prev, {...item, quantity}])
        }  

    }

    const realStock = product => {
        const foundItem = cart.find(e => e.id === product.id);
        return foundItem ? product.stock - foundItem.quantity : product.stock;
    }


    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        if (!localCart) localStorage.setItem('cart', JSON.stringify([]));
        else setCart(JSON.parse(localCart));
        setProviderLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const inCart = cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        setProductsInCart(inCart);
    }, [cart] );

   

    return <CartContext.Provider value={{cart, setCart, addToCart, clearCart, providerLoading, productsInCart, realStock}}>
        {children}
    </CartContext.Provider>
}