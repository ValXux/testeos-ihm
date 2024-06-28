import { Link } from "react-router-dom";

const Aside = () => {
    return <aside className="container">
        <h1 className="text-center">Bienvenidos a ChaskiCode&#40;&#41;</h1>
        <br></br>
        <form className="justify-content-center align-items-center m-10">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"><strong>Usuario o correo electrónico</strong></label>
                <input type="text" className="form-control" placeholder="Usuario o correo electronico" style={{background:"#B6BCC8", color:"#67728C"}}></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"><strong>Contraseña</strong></label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" style={{background:"#B6BCC8", color:"#67728C"}}/>
            </div>
            <div class="mb-3">
                <a href="/">¿Olvide mi contraseña?</a>
            </div>
            <br></br>
            <div className="container text-center">
                <div className="d-flex justify-content-evenly">
                    <Link to="/home"><button type="submit" className="btn color-btn">Iniciar Sesion</button></Link>
                    <Link to="/register"><button type="submit" className="btn color-btn">Crear Cuenta</button></Link>
                </div>
                <hr></hr>
            </div>
        </form>
    </aside>;
}

export default Aside;