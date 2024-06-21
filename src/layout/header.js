import { Link } from "react-router-dom";

const Header = () => {
    return <nav className="navbar fixed-top bg-danger p-2">
        <div className="container">
            <Link to="/" className="navbar-brand" href="#">ChaskiCode<strong>&#40;&#41;</strong></Link>
        </div>
    </nav>
}

export default Header;