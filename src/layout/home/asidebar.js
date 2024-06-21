import { Link } from "react-router-dom";

const Asidebar = () => {
    return <aside class="col-md-2 d-none d-md-block p-4" style={{background:"#B6BCC8"}}>
        <div class="position-fixed">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to=""><a className='nav-link'>Inicio</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="profile"><a class="nav-link" >Perfil</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="progress"><a class="nav-link">Progreso</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="challenge"><a class="nav-link">Desafios</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="help"><a class="nav-link">Ayuda y Soporte</a></Link>
                </li>
            </ul>
        </div>
    </aside>
}

export default Asidebar;