import React from 'react'
import { useCartContext } from '../context/CartContext';
import './detail.css'
import ItemCount from './ItemCount';

export const ItemDetail = ({ product }) => {

    const {addToCart, realStock} = useCartContext();
    const stock = realStock(product);
    
    const onAdd = qty => {
        addToCart(product, qty)
    }
    
    
    return (

        <div className="card p-5">
            <div className="d-flex justify-content-center"><img src={product.image} alt="" className="foto-thumbnail"/></div>
            
            <div className="card-body text-center m-5 p-5">
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="card-title">Precio: ${product.price}</h5>
                    {stock > 0 ? <> <h3>Stock:{stock}</h3> 
                    <ItemCount onAdd={onAdd} stock={stock} />
                    </> : <h3>Sin Stock</h3>}
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Categoría: {product.category}</p>
                    
            
            
                    </div>
                    </div>

      
    )
}

export default ItemDetail;
