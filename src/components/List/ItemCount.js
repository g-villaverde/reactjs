import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [toAdd, setToAdd] = useState (stock ? 1 : 0);

    
    return (
        <div className="container d-flex flex-column h4 justify-content-center">
            <div className="container d-flex justify-content-center p-4">
                <button className="btn btn-primary" onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}>-</button>
                <span>{toAdd}</span>
                <button className="btn btn-primary" onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}>+</button>
            </div>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => onAdd(toAdd)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;