import React from "react";
import {Link, useLoaderData, useSearchParams} from 'react-router-dom';
import VansList from '../components/VansList';


export default function Vans() {
    const vans = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    // filtering vans based on its type.
    const typeFilter = searchParams.get('type');
    const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

    function handleFilterChange(key, value) {
        setSearchParams((prevParams) => {
            if(value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams;
        })
    }

    return ( 
        <div className="vans-list-container">
            <h2>Explore our van options</h2>
            <div className="van-list-filter-buttons">
            {/* IN THE NEXT SESSION CHANGE ALL THE LINKS TO BUTTON INSTEAD AND USE 
                setSearchParams() to change the query params.
             */}
                {/* <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="." className="clear-filters">Clear filters</Link> */}
                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "simple")}>Simple</button>
                <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
                <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
                { typeFilter ? 
                (<button className="clear-filters" onClick={() => handleFilterChange("type", null)}>Clear filters</button>) : null}
                
            </div>
            <VansList vans={displayedVans} typeFilter={typeFilter} />
       </div>
    )
}

export async function loader(){
    const response = await fetch('/api/vans');
    
    if(!response) {
        console.log('failed fetching data')
    } else {
        const resData = await response.json();
        return resData.vans;
    }
    
}