import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import ItemCount from './components/List/ItemCount';
import ItemDetailContainer from './components/detail/ItemDetailContainer';



function App() {


  return (
    <BrowserRouter>
    
    <NavBar />
    <Switch>
        <Route exact path="/">
          <ItemCount />
        </Route>
        <Route path="/category/:category">
          <ItemCount />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
    </Switch>
    </BrowserRouter>
    

    
  );
}

export default App;




