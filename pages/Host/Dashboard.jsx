import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";
import { getHostVans } from "../../api";
import { Suspense } from "react";
// import { BsStarFill } from "react-icons/bs"

const Dashboard = () => {
  const dataPromise = useLoaderData();

  function renderVanEls(vans) {
    return vans.map((van) => (
      <Link className="host-van-link-wrapper" to={van.id} key={van.id}>
        <div key={van.id} className="host-van-single">
          <img src={van.imageUrl} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        {/* <BsStarFill className="star" /> */}
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <Suspense fallback={<h3 style={{ textAlign: "center" }}>Loading vans...</h3>}>
          <Await resolve={dataPromise.vans}>{renderVanEls}</Await>
        </Suspense>
      </section>
    </>
  );
};

export default Dashboard;

export async function loader({request}){
    await requireAuth(request);
    return defer({vans: getHostVans()})
}
