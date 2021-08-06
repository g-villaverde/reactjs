import React from 'react'
import { useCartContext } from '../context/CartContext';
import './detail.css'
import ItemCount from './ItemCount';

export const ItemDetail = ({ product }) => {

    const {cart, addToCart} = useCartContext();
    
    const onAdd = qty => {
        addToCart(product, qty)
    };
    console.log(cart)               // !!!!
    
    return (

        <div className="card p-5">
            <div className="d-flex justify-content-center"><img src={product.image} alt="" className="foto-thumbnail"/></div>
            
            <div className="card-body text-center m-5 p-5">
                    <h5 className="card-title h3">{product.title}</h5>
                    <span className="d-flex justify-content-center"><p className="card-text description">{product.description}</p></span>
                    <p className="card-text">Categoría: {product.category}</p>
                    <h5 className="card-title">Precio: ${product.price}</h5>
                    
                    <ItemCount onAdd={onAdd}/>
                    
                    
            
            
                    </div>
                    </div>

      
    )
}

export default ItemDetail;
