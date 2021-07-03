import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartWidget } from './CartWidget';

const NavBar = () => {

  const history = useHistory();

  const handleChange = (e) => {
    e.target.value &&
      history.push(`/category/${e.target.value}`)
  }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              {/* Link al home remplazando el a href */}
            <Link to="/" > <h1 className="navbar-brand">Store.com</h1></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">

  <div class="dropdown">
 
  <select onChange={handleChange} className="btn btn-primary">
    <option value="" className="">Todas las categorias</option>
    <option value="men's clothing">Ropa Hombre</option>
    <option value="jewelery">Joyas</option>
    <option value="electronics">Electronica</option>
  </select>
    

</div>
  
    <span><CartWidget /></span>
  </div>
</nav>
        </div>
    )
}

export default NavBar;
