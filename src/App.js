import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


export const App = () => {
  const saludo = "Bienvenidos!";
  return (
    <div>
      <NavBar /> 
      <ItemListContainer saludo={saludo} />
    </div>

  )
}


