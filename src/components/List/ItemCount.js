import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './count.css';

const ItemCount = ({stock, onAdd}) => {
    const [toAdd, setToAdd] = useState (stock ? 1 : 0);
        
    return (
        <div className="container d-flex flex-column h4 justify-content-center">
            <div className="row d-flex justify-content-center align-content-center flex-column p-4">
                <div className="row d-flex justify-content-center p-3">
                    <div className="col-1"><button className="btn btn-primary size-button" onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}>-</button></div>
                    <div className="col-1"><span className="p-2 border counter">{toAdd}</span></div>
                    <div className="col-1"><button className="btn btn-primary size-button" onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}>+</button></div>
         
                    
                </div>
                
            </div>
            <div className="row d-flex flex-column align-content-center justify-content-center">
            <div className="col-3"><button type="button" className="btn btn-primary btn-lg " onClick={() => onAdd(toAdd)}>Añadir al carrito</button></div>
            <div className="col-3"><Link to="/cart" className="btn btn-primary btn-lg p-2 my-2">Terminar compra</Link></div>
            </div>
            
        </div>
    )
}

export default ItemCount;