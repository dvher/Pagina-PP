import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { FaPaw, FaCog, FaUser, FaSearch } from "react-icons/fa";
import { MobileView } from "react-device-detect";
import logo from '../img/logo.png';
import { useAppSelector } from '../app/hooks';

const IsAdmin = () => {
    return useAppSelector(state => state);
}

export default function NavBar(props: any) {

    const isAdmin = IsAdmin().status;
    const isLogged = IsAdmin().user;

    return (
        <Navbar collapseOnSelect expand='lg' variant='light' className='navbar' fixed="top">
            <Container fluid>
                <Navbar.Brand href="/"><img src={logo} alt={'PP'} className='logopp' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/noticias">Noticias</Nav.Link>
                        <Nav.Link href="/adopciones">Adopciones</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form className="d-flex me-3">
                            <InputGroup>
                                <Form.Control
                                type="search"
                                aria-label="Search"
                                />
                                <Button variant="light" className='search-btn'><FaSearch /></Button>
                            </InputGroup>
                        </Form>
                        <Nav.Link href="/rescatados" title="Rescatados">
                            <FaPaw />
                            <MobileView>
                                Rescatados
                            </MobileView>
                        </Nav.Link>
                        {
                            isLogged ? (
                                isAdmin ? (
                                    <Nav.Link href="/login" title="Admin">
                                        <FaUser />
                                        <MobileView>
                                            Admin
                                        </MobileView>
                                    </Nav.Link>
                                ) : (
                                    <Nav.Link href="/login" title="Usuario">
                                        <FaUser />
                                        <MobileView>
                                            Usuario
                                        </MobileView>
                                    </Nav.Link>
                                )
                            ) : (
                                <Nav.Link href="/login" title="Iniciar Sesión">
                                    <FaUser />
                                    <MobileView>
                                        Iniciar Sesión
                                    </MobileView>
                                </Nav.Link>
                            )
                        }
                        <Nav.Link href="/" title="Configuración">
                            <FaCog />
                            <MobileView>
                                Configuración
                            </MobileView>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
