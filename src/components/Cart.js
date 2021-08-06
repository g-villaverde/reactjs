import React from 'react';
import {Redirect} from 'react-router-dom';
import { useCartContext } from './context/CartContext';
import './List/detail.css';
import FormComponent from './firebase/FormComponents';
import {db} from './firebase/index';


export const Cart = () => {
    const { cart, clearCart, providerLoading} = useCartContext();

    const checkoutCarrito = async(object) => {
        //console.log(cart);
        await db.collection("ordenesCompra").doc().set(object);
        console.log("producto agregbado");
    };
    
    if (providerLoading) return <h2>Cargando</h2>;
    if(!cart.length) return <Redirect to='/' />;

    return (

        
        <div className="container d-flex justify-content-center flex-column p-5">
            
            <div className="row d-flex justify-content-center"><h3>Mi Carrito</h3></div>
            <div className="row d-flex justify-content-center">
            
            <table className="bordes mb-5">
                <tr>
                    <th className="mx-4 text-center h3 border-wrap p-3">Producto</th>
                    <th className="mx-4 text-center h3 border-wrap p-3">Cantidad</th>
                    <th className="mx-4 text-center h3 border-wrap p-3">Precio por unidad</th>
                </tr>
                {cart.map((item) => (
            <tr  key={item.id}>
            <td className="text-center h4 mx-5 p-2 border">{item.title}</td>
            <td className="text-center h4 mx-5 p-2 border">{item.quantity}</td>
            <td className="text-center h4 mx-5 p-2 border">${item.price}</td>
            </tr>
            ))}
            </table>

            
            </div>
            
            <div className="row">
            <div className="col-2 p-2">
            <h3>Total: <span className="badge badge-primary"> ${cart.reduce((acc,  {quantity, price} ) => acc + quantity * price, 0).toFixed(2)}</span></h3>
            </div>
            <div className="col-2">

            <button className="btn btn-danger p-1 my-2 " onClick={clearCart}> Vaciar Carrito </button>
            </div>
            </div>
            <div className="row mb-3">
            <h3>Datos de Compra:</h3>
            <FormComponent checkoutCarrito={checkoutCarrito}/>

            </div>
            
           
        </div>
    )

}

export default Cart;