import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function VansList({vans}){
    return (
         <ul className="vans-list">
            {vans.map((van) => (
                <li key={van.id}>
                <Link to={van.id}>
                    <div className="vans-list-img">
                        <img src={van.imageUrl}/>
                    </div>
                    <div className="vans-list-info">
                        <h4>{van.name}</h4>
                        <span>${van.price}/day</span>
                    </div>
                    <div className="vans-list-type"><p>{van.type}</p></div>
                </Link>
                </li>
            ))}
        </ul>
    )
}