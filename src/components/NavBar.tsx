import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Form, InputGroup, Button, NavDropdown } from 'react-bootstrap';
import { FaPaw, FaCog, FaUser, FaSearch } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import logo from '../img/logo.png';
import { useAppSelector } from '../app/hooks';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const IsAdmin = () => {
    return useAppSelector(state => state);
}

export default function NavBar() {

    const isAdmin = IsAdmin().status;
    const isLogged = IsAdmin().user;
    const name = IsAdmin().name;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar collapseOnSelect expand='lg' variant='light' className='navbar' fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={logo} alt={'PP'} className='logopp' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto center-screen">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/noticias">Noticias</Nav.Link>
                            <Nav.Link href="/adopciones">Adopciones</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto center-screen">
                            <Form className="d-flex me-3">
                                <InputGroup>
                                    <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    />
                                    <Button variant="light" className='search-btn'><FaSearch /></Button>
                                </InputGroup>
                            </Form>
                            <Nav.Link href="/rescatados" title="Rescatados">{isMobile ? 'Rescatados' : <FaPaw />}</Nav.Link>
                            {
                                isLogged ? (
                                    isAdmin ? (
                                        <NavDropdown title={isMobile ? 'Admin' : <FaUser />} align={isMobile ? "start" : "end"}>
                                            <NavDropdown.ItemText>{name}</NavDropdown.ItemText>
                                            <NavDropdown.Item href="/admin">Panel de administración</NavDropdown.Item>
                                            <NavDropdown.Item target='if' href="/logout">Cerrar sesión</NavDropdown.Item>
                                            <iframe hidden title='if' name='if'></iframe>
                                        </NavDropdown>
                                    ) : (
                                        <NavDropdown title={isMobile ? 'Usuario' : <FaUser />} align="end">
                                            <NavDropdown.ItemText>{name}</NavDropdown.ItemText>
                                            <NavDropdown.Item onClick={() => window.location.href='/logout'}>Cerrar sesión</NavDropdown.Item>
                                        </NavDropdown>
                                    )
                                ) : (
                                    <Nav.Link href="/login" title="Iniciar Sesión">{isMobile ? 'Iniciar sesión' : <FaUser />}</Nav.Link>
                                )
                            }
                            <Nav.Link onClick={() => setShow(true)} title="Configuración">{isMobile ? 'Configuración' : <FaCog />}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Configuración</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
