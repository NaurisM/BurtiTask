import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pasūtījuma forma</h1>
            <div className="links">
                <Link to="/">Atpakaļ</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;