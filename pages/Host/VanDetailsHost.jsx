import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

const VanDetails = () => {
    const van = useLoaderData();
    // console.log(van);
    // console.log(van[0].name)
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return ( 
        <div className="van-details-host">
            <Link to='..' relative="path"><span className="icon">&larr; </span>Back to all vans</Link>
            <main>
                <div className="van-details-host-container">
                    <div className="van-details-host-info">
                        <img src={van[0].imageUrl} alt={van[0].name} />
                        <div className="van-details-host-text">
                            <h4>{van[0].type}</h4>
                            <h3>{van[0].name}</h3>
                            <p><span>${van[0].price}</span>/day</p>
                        </div>
                    </div>
                    <nav>
                        <NavLink
                        to='.'
                        end
                        style={({isActive}) => isActive ? activeLink : null }
                        >
                        Details
                        </NavLink>
                        <NavLink
                        to='pricing'
                        style={({isActive}) => isActive ? activeLink : null }
                        >
                        Pricing
                        </NavLink>
                        <NavLink
                        to='photos'
                        style={({isActive}) => isActive ? activeLink : null }
                        >
                        Photos
                        </NavLink>
                    </nav>
                </div>
                <Outlet />
                {/* <h5><span>Name: </span>{van[0].name}</h5>
                <h5><span>Category: </span>{van[0].type}</h5>
                <h5><span>Description: </span>{van[0].description}</h5>
                <h5><span>Visibility: </span>Public</h5> */}
            </main>
        </div>
     );
}
 
export default VanDetails;

export async function loader({params}){
    const id = params.id;
    const response = await fetch('/api/host/vans/' + id);

    if(!response){
        console.log('failed to fecth data!')
    } else {
        const resData = await response.json();
        return resData.vans;
    }
}