import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";
import {itemsCollection} from '../firebase';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const {category} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
      (async ()=> {
        let collection = itemsCollection;
        if(category) collection = itemsCollection.where("category", "==", category);
        const response = await collection.get();
        setItems(response.docs.map(item => ({id: item.id, ...item.data()})))
      })();
    }, [category])
  

    return (
        
        <div className="container">
            <ListItem product={items} />
            
        </div>
    );
}


export default ItemListContainer;