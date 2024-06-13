import { Link } from "react-router-dom";

const Aside = () => {
    return <aside className="container">
        <h1 className="text-center">Bienvenidos a ChaskiCode&#40;&#41;</h1>
        <br></br>
        <form className="justify-content-center align-items-center m-10">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Usuario o correo electrónico</label>
                <input type="text" className="form-control" placeholder="Usuario o correo electronico"></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
            </div>
            <div class="mb-3">
                <a href="/">¿Olvide mi contraseña?</a>
            </div>
            <br></br>
            <div className="container text-center">
                <div className="d-flex justify-content-between">
                    <Link to="/home" class="btn btn-primary "><button type="submit" className="btn">Iniciar Sesion</button></Link>
                    <button type="submit" class="btn btn-primary col-md-5">Crear Cuenta</button>
                    
                </div>
                <hr></hr>
            </div>
        </form>
    </aside>;
}

export default Aside;