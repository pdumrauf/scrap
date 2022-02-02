import './Item.css';

const Item = ({item}) => {
    console.log(item)
    return (
        <div className='card'>
            <img src={item.img} alt={item.name} className="imgProduct"/>
            <div>
                <h3>{item.name}</h3>
                <p>$ {item.price}</p>
            </div>
        </div>
    )
}

export default Item;