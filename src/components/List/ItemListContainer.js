import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";
import {itemsCollection} from '../firebase';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const {categoryName} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
      (async ()=> {
        let collection = itemsCollection;
        if(categoryName) collection = itemsCollection.where("category", "==", categoryName);
        const response = await collection.get();
        setItems(response.docs.map(item => ({id: item.id, ...item.data()})))
      })();
    }, [categoryName])
  

    return (
        
        <div className="container">
            <ListItem product={items} />
            
        </div>
    );
}


export default ItemListContainer;