import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FaPaw, FaCog, FaUser } from "react-icons/fa";
import { MobileView } from "react-device-detect";
import logo from '../img/logo.png';

export default class NavBar extends React.Component<any, any> {

    render() {
        return (
            <Navbar collapseOnSelect expand='lg' variant='light' className='navbar' fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={logo} alt={'PP'} className='logopp' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/">Noticias</Nav.Link>
                            <Nav.Link href="/">Adopciones</Nav.Link>
                            <Nav.Link href="/">Blog</Nav.Link>
                            <Nav.Link href="/">Contacto</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                            <Nav.Link href="/" title="Rescatados">
                                <FaPaw />
                                <MobileView>
                                    Rescatados
                                </MobileView>
                            </Nav.Link>
                            <Nav.Link href="/" title="Usuario">
                                <FaUser />
                                <MobileView>
                                    Usuario
                                </MobileView>
                            </Nav.Link>
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
        )
    }

}
