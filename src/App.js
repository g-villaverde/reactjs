import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/header/NavBar';
//import ItemCount from './components/List/ItemCount';
import ItemDetailContainer from './components/List/ItemDetailContainer';
import ItemListContainer from './components/List/ItemListContainer';
import { CartProvider } from './components/context/CartContext';





function App() {


  return (
<CartProvider>

    <BrowserRouter>
        
        <NavBar />
        <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
            </Route>
        </Switch>
        </BrowserRouter>

</CartProvider>
    
  

    
  );
}

export default App;




