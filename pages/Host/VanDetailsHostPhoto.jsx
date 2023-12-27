import { useRouteLoaderData } from "react-router-dom";

const VanDetailsHostPhoto = () => {
    const van = useRouteLoaderData('van-detail-host');

    return (
        <div className="van-details-host-photo">
            <img src={van[0].imageUrl} alt={van[0].name} />
        </div>
    );
}
 
export default VanDetailsHostPhoto;