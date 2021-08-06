import React from 'react';
import './lista.css';

import { Link } from 'react-router-dom';

const Item = (props) => {
    
    
    return (
        
        <div className="card col-4 p-2 d-flex justify-content-center">
           <img src={props.image} alt="" className="p-5"/>
           <div className="d-inline d-flex justify-content-center">
            <Link to={`/item/${props.id}`} style={{ textDecoration: 'none' }} className="titulos" > <p className="titulos">{props.title} - ${props.price}</p> </Link>
           </div>
        </div>

    )
}


export default Item;