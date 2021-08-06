import { useState } from "react";
import React from 'react';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useCartContext } from '../context/CartContext';


const FormComponent = ({checkoutCarrito}) => {

  const {clearCart} = useCartContext();

    const initialState = {
        email:'',
        nombre:'',
        apellido:''
    }

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
      //console.log(e.target.name, e.target.value)  
      const {name, value} = e.target;
      setValues({ ...values, [name]: value })

    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setValues( {...initialState });
        clearCart();
        checkoutCarrito(values);
        alert("Gracias por su compra");
    };


    return <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email" name="email" onChange={handleOnChange} value={values.email}/>
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="nombre" placeholder="Nombre" name="nombre" onChange={handleOnChange} value={values.nombre}/>
    <Form.Label>Apellido</Form.Label>
    <Form.Control type="apellido" placeholder="Apellido" name="apellido" onChange={handleOnChange} value={values.apellido}/>
  </Form.Group>
    <Button variant="primary" type="submit">Checkout</Button>
</Form>
}

export default FormComponent; 