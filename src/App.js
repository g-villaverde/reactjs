import React,{useState} from 'react';
import {NavBar} from './header/NavBar';
//import {ItemListContainer} from './List/ItemListContainer';



export default function App() {


  // Handlers 
  const [numero, setNumero] = useState(0);
  const handleIncrement = () => {
      setNumero(numero + 1);
  }
  const handleDecrement = () => {
    setNumero(numero - 1);
  }



  return (

    <div className="App">
      <header className="App-header"><NavBar />
      </header>
      <main>
        <p>{numero}</p>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        

        

      </main>
    </div>

    
  );
}




