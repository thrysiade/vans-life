import { Link } from "react-router-dom";

const VanItem = ({van}) => {
    return ( 
        <div className="van-item">
            <Link to="/vans">Back to all vans</Link>
            <img src={van.imageUrl}></img>
            <p className="van-item-type">{van.type}</p>
            <h2>{van.name}</h2>
            <span>${van.price}/day</span>
            <p className="van-item-desc">{van.description}</p>
            <button>Rent this van</button>
        </div>
    );
}
 
export default VanItem;