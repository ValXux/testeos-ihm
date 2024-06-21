import { Link } from "react-router-dom";

const Header = () => {
    return <nav className="diavlo navbar fixed-top p-2" style={{background:"#032261"}}>
        <div className="container">
            <Link to="/" className="navbar-brand" style={{color:"#fff"}} href="#">ChaskiCode<strong>&#40;&#41;</strong></Link>
        </div>
    </nav>
}

export default Header;