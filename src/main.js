import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Code_img from './data/code_img.json'
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/producto/" + slug);
    }

    return (
        <Container className="col-8">
            <Row className="justify-content-center">
                <Col>
                    <h1 className="text-center">¡Descubre la revolución en limpieza con nuestra nueva publicación de productos de limpieza!</h1>
                    
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
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
