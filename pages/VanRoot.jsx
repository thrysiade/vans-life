import { Outlet, Link } from "react-router-dom";

const VanRootLayout = () => {
    return ( 
        <>
        {/* <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header> */}
        <Outlet />
        </>
     );
}
 
export default VanRootLayout;