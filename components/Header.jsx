import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "links-active" : null }
                    >
                    Host
                    </NavLink>
                    <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "links-active" : null }
                    >
                    About
                    </NavLink>
                    <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "links-active" : null }
                    >
                    Vans
                    </NavLink>
                </nav>
            </header>
    );
}
 
export default Header;