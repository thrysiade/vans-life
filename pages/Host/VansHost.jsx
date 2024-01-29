import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";
import { getHostVans } from "../../api";
import { Suspense } from "react";

const Vans = () => {
    const dataPromise = useLoaderData();

    function renderVanEls(vans){
        return (
            vans.map((van) => (
                <Link className="host-van-link-wrapper" to={van.id} key={van.id}>
                    <div key={van.id} className="host-van-single">
                        <img src={van.imageUrl}/>
                        <div className="host-van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                        </div>
                    </div>
                </Link>
            ))
        )
    }

    return (
        <section>
            <div className="host-vans-title">
                <h1>Your listed vans.</h1>
            </div>
            <div className="host-vans-list">
            <Suspense fallback={<h3 style={{textAlign: "center"}}>Loading vans...</h3>}>
            <Await resolve={dataPromise.vans}>
            {/* { vans.map((van) => (
                <Link className="host-van-link-wrapper" to={van.id} key={van.id}>
                    <div key={van.id} className="host-van-single">
                        <img src={van.imageUrl}/>
                        <div className="host-van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                        </div>
                    </div>
                </Link>
            ))} */}
            {renderVanEls}
            </Await>
            </Suspense>
            </div>
        </section>
    );
}
 
export default Vans;

export async function loader({request}){
    await requireAuth(request);
    return defer({vans: getHostVans()});
    // const response = await fetch('/api/host/vans');

    // if(!response) {
    //     console.log('failed to fetch data')
    // } else {
    //     const resData = await response.json();
    //     return resData.vans;
    // }
}