import { useRouteLoaderData } from "react-router-dom";

const VanDetailsHostInfo = () => {
    const van = useRouteLoaderData('van-detail-host');
    return (
        <div>
            <h5><span>Name: </span>{van.name}</h5>
            <h5><span>Category: </span>{van.type}</h5>
            <h5><span>Description: </span>{van.description}</h5>
            <h5><span>Visibility: </span>Public</h5>
        </div>
    );
}
 
export default VanDetailsHostInfo;