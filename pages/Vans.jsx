import React from "react";
import {Link, useLoaderData, useSearchParams} from 'react-router-dom';
import VansList from '../components/VansList';


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const vans = useLoaderData();

    // filtering vans based on its type.
    const typeFilter = searchParams.get('type');
    const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

    return ( 
        <div className="vans-list-container">
            <h2>Explore our van options</h2>
            <div className="van-list-filter-buttons">
            {/* IN THE NEXT SESSION CHANGE ALL THE LINKS TO BUTTON INSTEAD AND USE 
                setSearchParams() to change the query params.
             */}
                <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="." className="clear-filters">Clear filters</Link>
            </div>
            <VansList vans={displayedVans} />
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