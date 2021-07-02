import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

const promiseCargando = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ([
                {
                    "id": 1, 
                    "product": "Dragline",
                    "destacado": true,
                    "type": "Vinyl"
                  }, {
                    "id": 2,
                    "product": "Trencher",
                    "type": "Steel"
                  }, {
                    "id": 3,
                    "product": "Backhoe",
                    "type": "Plastic"
                  }, {
                    "id": 4,
                    "product": "Bulldozer",
                    "type": "Aluminum"
                  }, {
                    "id": 5,
                    "product": "Backhoe",
                    "type": "Granite"
                  }, {
                    "id": 6,
                    "product": "Excavator",
                    "type": "Brass"
                  }, {
                    "id": 7,
                    "product": "Backhoe",
                    "type": "Steel"
                  }
            ])
        }, 2000);
        
    })
}

export default function ItemListContainer () {
    const [producto, setProductos] = useState([])

     const resultadoPromesa = () => {
        promiseCargando().then((listaProductos) => {
            setProductos(listaProductos);
        } )
    } 

    useEffect(() => {
        resultadoPromesa();
    }, [])

    return (
        console.log(producto),
        <div>
            <ListItem itemList={producto} />
            
        </div>
    );
}


