import { useRouteLoaderData } from "react-router-dom";

const VanDetailsHostInfo = () => {
    const van = useRouteLoaderData('van-detail-host');
    return (
        <div>
            <h5><span>Name: </span>{van[0].name}</h5>
            <h5><span>Category: </span>{van[0].type}</h5>
            <h5><span>Description: </span>{van[0].description}</h5>
            <h5><span>Visibility: </span>Public</h5>
        </div>
    );
}
 
export default VanDetailsHostInfo;