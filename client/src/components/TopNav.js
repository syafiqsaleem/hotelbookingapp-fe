import { Link } from "react-router-dom";

// Navigation Menu
const TopNav = () => (
  <div className="nav bg-light d-flex justfy-content-between">
    {/* No page reload because we use Link component */}
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/register">
      Register
    </Link>
  </div>
);

export default TopNav;
