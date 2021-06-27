import React from 'react';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Action</a>
    <a class="dropdown-item" href="/">Another action</a>
    <a class="dropdown-item" href="/">Something else here</a>
  </div>
</div>
    <CartWidget />
  </div>
</nav>
        </div>
    )
}
