import { Link, NavLink } from "react-router-dom";

const Header = () => {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "links-active" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "links-active" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "links-active" : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src="../assets/images/user-circle.png" className="login-icon" />
        </Link>
        {/* <button onClick={fakeLogOut}>X</button> */}
      </nav>
    </header>
  );
};

export default Header;
