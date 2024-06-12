import { Link } from "react-router-dom";

const Header = () => {
    return <nav className="navbar fixed bg-danger p-2">
        <div className="container">
            <a className="navbar-brand" href="#">ChaskiCode<strong>&#40;&#41;</strong></a>
            <button className="btn btn-primary" type="button">Crear cuenta</button>
        </div>
    </nav>
}

export default Header;