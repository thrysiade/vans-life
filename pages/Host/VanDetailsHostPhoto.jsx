import { useRouteLoaderData } from "react-router-dom";

const VanDetailsHostPhoto = () => {
    const van = useRouteLoaderData('van-detail-host');

    return (
        <div className="van-details-host-photo">
            <img src={van.imageUrl} alt={van.name} />
        </div>
    );
}
 
export default VanDetailsHostPhoto;