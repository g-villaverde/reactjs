
import Item from "./Item";

const ListItem = (props) => {
  const passingItem = props.itemList;

  return (
    <ul>
      {passingItem.map((dataItem) => (
        <Item key={dataItem.id} value={dataItem.product}/>
      )  )}
    </ul>
  )

 
  }

export default ListItem;