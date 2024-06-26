import React from 'react';
import 'bootstrap/js/dist/collapse'

const Help = () => {
    return (
        <main className="d-flex flex-column align-items-center col-md-10 ms-sm-auto col-lg-10 px-md-4 p-4">
            <h1>Preguntas frecuentes</h1>
            <hr></hr>
            <div className='container'>
                <h2>Como usar ChaskiCode</h2>
                <div className='p-2'>
                    <ul>
                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                                ¿Por qué cambió mi curso?
                            </a>
                        </li>
                        <div className="collapse multi-collapse" id="collapse1">
                            <div className="card card-body">
                                Aquí va la información sobre por qué cambió el curso.
                            </div>
                        </div>

                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                                ¿Qué es la racha?
                            </a>
                        </li>
                        <div className="collapse multi-collapse" id="collapse2">
                            <div className="card card-body">
                                Aquí va la información sobre qué es la racha.
                            </div>
                        </div>

                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
                                ¿Qué son las vidas?
                            </a>
                        </li>
                        <div className="collapse multi-collapse" id="collapse3">
                            <div className="card card-body">
                                Aquí va la información sobre qué son las vidas.
                            </div>
                        </div>

                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapse4">
                                ¿ChaskiCode utiliza bibliotecas de código abierto?
                            </a>
                        </li>
                        <div className="collapse multi-collapse" id="collapse4">
                            <div className="card card-body">
                                Aquí va la información sobre si ChaskiCode utiliza bibliotecas de código abierto.
                            </div>
                        </div>
                    </ul>
                </div>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="collapse1 collapse2 collapse3 collapse4">Mostrar todos</button>
            </div>

            <hr></hr>
            
            <div className='container'>
                <h2>Administración de cuentas</h2>
                <div className='p-2'>
                    <ul>
                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapse5">
                                ¿Cómo cambio mi nombre de usuario o mi dirección de correo electrónico?
                            </a>
                        </li>
                        <div className="collapse multi-collapse1" id="collapse5">
                            <div className="card card-body">
                                Aquí va la información sobre cómo cambiar el nombre de usuario o el correo electrónico.
                            </div>
                        </div>

                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapse6">
                                ¿Cómo puedo buscar, seguir o bloquear usuarios en ChaskiCode?
                            </a>
                        </li>
                        <div className="collapse multi-collapse1" id="collapse6">
                            <div className="card card-body">
                                Aquí va la información sobre cómo buscar, seguir o bloquear usuarios.
                            </div>
                        </div>

                        <li class="nav-item m-2">
                            <a class="text-decoration-none" data-bs-toggle="collapse" href="#collapse7" role="button" aria-expanded="false" aria-controls="collapse7">
                                ¿Cómo elimino o reinicio un curso?
                            </a>
                        </li>
                        <div className="collapse multi-collapse1" id="collapse7">
                            <div className="card card-body">
                                Aquí va la información sobre cómo eliminar o reiniciar un curso.
                            </div>
                        </div>

                        <li class="nav-item m-2">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse8" role="button" aria-expanded="false" aria-controls="collapse8">
                                Tengo problemas para acceder a mi cuenta.
                            </a>
                        </li>
                        <div className="collapse multi-collapse1" id="collapse8">
                            <div className="card card-body">
                                Aquí va la información sobre problemas para acceder a la cuenta.
                            </div>
                        </div>
                    </ul>
                </div>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse1" aria-expanded="false" aria-controls="collapse5 collapse6 collapse7 collapse8">Mostrar todos</button>
            </div>
        </main>
    );
}

export default Help;
