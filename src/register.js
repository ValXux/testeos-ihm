import { Link } from "react-router-dom";

const Register = () => {
    return <main className="container" style={{top:"50px"}}>
        <div className="row">
            <div className="m-5">
                <h1 className="text-center" >Formulario de registro - ChaskiCode&#40;&#41;</h1>
                <form className="justify-content-center align-items-center m-5">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><strong>Nombre</strong></label>
                        <input type="text" className="form-control" placeholder="Nombre" style={{background:"#B6BCC8", color:"#67728C"}}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><strong>Apellidos</strong></label>
                        <input type="text" className="form-control" placeholder="Apellidos" style={{background:"#B6BCC8", color:"#67728C"}}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><strong>Correo electronico</strong></label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Correo electronico" style={{background:"#B6BCC8", color:"#67728C"}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><strong>Contraseña</strong></label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" style={{background:"#B6BCC8", color:"#67728C"}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><strong>Confirmar contraseña</strong></label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar contraseña" style={{background:"#B6BCC8", color:"#67728C"}}/>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-end align-items-center">
                        <Link to="/home"><button type="submit" className="btn btn-primary">Iniciar Sesion</button></Link>
                    </div>
                </form>
            </div>
        </div>
    </main>;
}

export default Register;