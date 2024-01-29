import React, { Suspense } from "react";
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import VansList from "../components/VansList";
import { getVans } from "../api";

export default function Vans() {
  const dataPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  // filtering vans based on its type.
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderVanElement(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans;

    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              className="clear-filters"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear filters
            </button>
          ) : null}
        </div>
        <VansList vans={displayedVans} typeFilter={typeFilter} />
      </>
    );
  }

  return (
    <div className="vans-list-container">
      <h2>Explore our van options</h2>
      <Suspense fallback={<h3 style={{textAlign: "center"}}>Loading vans...</h3>}>
      <Await resolve={dataPromise.vans}>
        {renderVanElement}
      </Await>
      </Suspense>
    </div>
  );
}

export async function loader() {
  return defer({ vans: getVans() });
}
