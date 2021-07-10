
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [producto, setProducto] = useState();

    useEffect(() => {
      (async () => {
        const { data: productos } = await axios.get("https://fakestoreapi.com/products")
        const foundProduct = productos.find(producto=>producto.id === +id);
        setProducto(foundProduct)
      })();
  
    }, [id]);
 
    return (
        <div>
            <ItemDetail {... producto} />
        </div>
    )

}

export default ItemDetailContainer;