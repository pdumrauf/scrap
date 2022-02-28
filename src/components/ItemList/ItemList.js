import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({items}) => {
    return (
        <div className="itemList-container gridContainerItem">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
};

export default ItemList;