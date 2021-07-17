
import Item from "./Item";

const ListItem = ({product}) => {
  
  return (
    <div className="row">
      {product.map(producto => (
        <Item key={producto.id} { ... producto} />
      ))}
    </div>
  )

 
  }

export default ListItem;