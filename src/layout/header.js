import { Link } from "react-router-dom";

const Header = () => {
    return <nav className="navbar fixed bg-danger p-2">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">ChaskiCode<strong>&#40;&#41;</strong></a>
            <button className="navbar-brand btn btn-primary" type="button">Crear cuenta</button>
        </div>
    </nav>
}

export default Header;