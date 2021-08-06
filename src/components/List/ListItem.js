
import Item from "./Item";

const ListItem = ({product}) => {
  
  return (
    <div className="row p-4 m-2">
      {product.map(producto => (
        <Item key={producto.id} { ... producto} />
      ))}
    </div>
  )

 
  }

export default ListItem;