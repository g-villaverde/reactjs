import React from 'react';
import './lista.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    
    
    return (
        <div className="col-4 p-5">
            <Link to={`/item/${props.id}`} > <h3>{props.title}</h3> </Link>
           <p className="h3">${props.price}</p>
           <img src={props.image} alt="" className="foto-thumbnail"/>
        </div>
    )
}


export default Item;