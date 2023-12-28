import { Link } from "react-router-dom";

const VanItem = ({van}) => {
    return ( 
        <div className="van-item">
            <Link to="/vans"><span>&larr;</span>Back to all vans</Link>
            <img src={van.imageUrl}></img>
            <p className="van-item-type">{van.type}</p>
            <h2>{van.name}</h2>
            <h3>${van.price}<span className="day">/day</span></h3>
            <p className="van-item-desc">{van.description}</p>
            <button>Rent this van</button>
        </div>
    );
}
 
export default VanItem;