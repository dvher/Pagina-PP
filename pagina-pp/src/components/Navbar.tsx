import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from '../assets/img/logo.svg';

const Nav = styled.div`
    grid-column: content-start / content-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

const Ul = styled.ul`
    margin:0;
    padding:0;
`;

const Li = styled.li`
    display: inline-block;
    padding:1rem;
    >*{
        vertical-align: middle;
        text-decoration: none;  
        color:black;
    }
`;

function Navbar() {

    return (
        <Router>
            <Nav>
                <Ul>
                    <Li><img src= {logo} width= "90rem"></img></Li>
                    <Li><Link to="/Inicio"> Inicio </Link></Li>
                    <Li><Link to="/Noticias"> Noticias </Link></Li>
                    <Li><Link to="/Adopciones"> Adopciones </Link></Li>
                    <Li><Link to="/Blog"> Blog </Link></Li>
                    <Li><Link to="/Contacto"> Contacto </Link></Li>
                </Ul>

                <Ul>
                    <Li><AccountCircleIcon ></AccountCircleIcon><Link to="/InicioSesion"> Inicio Sesion </Link></Li>
                    <Li><Link to="/Registro"> Registrarse </Link></Li>
                </Ul>
            </Nav>
        </Router>
    )
}

export default Navbar;