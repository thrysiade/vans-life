import { useRouteLoaderData } from "react-router-dom";

const VanDetailsHostPricing = () => {
    const van = useRouteLoaderData('van-detail-host');

    return (
        <div>
            <h4>${van[0].price}/day</h4>
        </div>
    );
}
 
export default VanDetailsHostPricing;