
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import {itemsCollection} from '../firebase';
import { useCartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
    const {cart} = useCartContext();
    

    const {id} = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      (async ()=> {
        const response = await itemsCollection.doc(id).get();
        setItem({ id: response.id, ...response.data()});
        setLoading(false);
      })()
    
      }, [id]);
 

    if (loading || !item) return <p className="h2">Loading</p>
      
    return (
        <ItemDetail product={item} />
    )

}

export default ItemDetailContainer;