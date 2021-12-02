import logo_avtaar from './logo_avtaar.jpg';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="heading-container">
                <img src={logo_avtaar} />
                <h3>Avtaar Assignment</h3>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Assignment</Link>
            </div>
        </nav>
    );
}

export default NavBar;