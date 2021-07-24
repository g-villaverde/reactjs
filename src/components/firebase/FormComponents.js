import React from 'react';


const FormComponent = () => {

    const initialState = {
        email:'',
        nombre:'',
        telefono:''
    }

    const {values, setValues} = useState(initialState);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} value={values.email}/>
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="name" onChange={handleOnChange} value={values.name}/>
    <Form.Label>Telefono</Form.Label>
    <Form.Control type="phone" placeholder="Enter phone" name="phone" onChange={handleOnChange} value={values.phone}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
}

export default FormComponent; 