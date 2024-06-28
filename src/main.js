import Carousel from 'react-bootstrap/Carousel';
import Code_img from './data/code_img.json'
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/code-img/" + slug);
    }

    return (
        <main>
            <Carousel>
                {
                    Code_img.map(it => {
                        return (<Carousel.Item onClick={(e) => {
                            e.preventDefault(); handleClick(it.slug)
                        }}>
                            <img className="d-block w-100" src={it.picture}></img>
                            <Carousel.Caption>
                                <h3>{it.name}</h3>
                                <p>{it.description}</p>
                            </Carousel.Caption>

                        </Carousel.Item>);
                    })
                }
            </Carousel>
        </main>
    );
}

export default Main;