import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Excercise = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const progresses = location.state?.progresses || Array(NUM_CIRCLES).fill(0).map((_, i) => (i === 0 ? 25 : 0));

    const handleFinishClick = () => {
        const newProgresses = progresses.map((progress, index) => {
            if (index === parseInt(id) - 1) {
                return 100;
            } else if (index === parseInt(id)) {
                return 25;
            } else {
                return progress;
            }
        });

        navigate("/home", { state: { progresses: newProgresses } });
    };

    return (
        <main className="col-md-6 ms-sm-auto col-lg-6 px-md-4 p-4">
            <h1 className="h2">Ejercicio N° {id}</h1>
            <p>Contenido de la página {id}</p>
            <button className="btn btn-primary" onClick={handleFinishClick}>Finalizar</button>
        </main>
    );
}

export default Excercise;
