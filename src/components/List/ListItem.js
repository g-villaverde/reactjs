
import Item from "./Item";

const ListItem = ({productos}) => {
  
  return (
    <div className="row">
      {productos.map(producto => (
        <Item key={producto.id} { ... producto} />
      ))}
    </div>
  )

 
  }

export default ListItem;