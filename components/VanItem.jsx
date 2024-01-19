import { Link, useLocation } from "react-router-dom";

const VanItem = ({van}) => {
    const { state } = useLocation();
    const search = state?.search || ''
    const type = state?.type || 'all'

    return ( 
        <div className="van-item">
            <Link 
            // to={state ? `..?${state.search}` : ".."}
            to={`..?${search}`}
            relative="path"
            >
            {/* <span>&larr;</span>{state.search ? `Back to all ${state.type} vans` : "Back to all vans"} */}
            <span>&larr;</span>Back to {type} vans
            </Link>
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