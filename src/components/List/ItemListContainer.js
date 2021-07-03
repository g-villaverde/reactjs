import React, {useEffect, useState} from "react";
import axios from 'axios';
import ListItem from "./ListItem";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const {category} = useParams();
  


  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: productos } = await axios.get("https://fakestoreapi.com/products")
      if(!category) return setProductos(productos);
      console.log(productos)
      const filterCategory = productos.filter(producto => producto.category === category);
      setProductos(filterCategory);
    })();

  }, [category]);

    return (
        
        <div className="container">
            <ListItem productos={productos} />
            
        </div>
    );
}


export default ItemListContainer;