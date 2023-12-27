import React from "react";
import {useLoaderData} from 'react-router-dom';
import VansList from '../components/VansList';

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */


export default function Vans() {
    const vans = useLoaderData();
    // console.log(vans);
    return ( 
        <>
            <h2>Explore our van options</h2>
            <VansList vans={vans} />
       </>
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