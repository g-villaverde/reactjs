import React from 'react'
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
        <div>
            <Link to="/cart" className="btn btn-primary p-2 mx-2">Carrito</Link>
        </div>
    )
}
