import React from 'react'
import './detail.css'

export const ItemDetail = (props) => {
    console.log(props)
    
    return (
        <>
        <div className="card p-5">
            <div className="d-flex justify-content-center"><img src={props.image} alt="" className="foto-thumbnail"/></div>
            
            <div className="card-body text-center m-5 p-5">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">Precio: ${props.price}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">Categoría: {props.category}</p>
                    
            </div>
            

        </div>
        </>
      
    )
}

export default ItemDetail;
