import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { sha512 } from 'crypto-hash';
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';

const IsAdmin = () => {
    return useAppSelector(state => state);
}

export default function Register() {
    document.title = "Registrarse";
    const isLogged = IsAdmin().user;
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    const submit = async () => {
        const data = {
            email,
            user,
            pass: await sha512(password)
        }
        axios.post('http://localhost:5000/api/register', data).then(res => {
            window.location.href = '/';
        }).catch(err => {
        });
    }
    return isLogged ? <>{window.location.href = "/"}</> : (
        <div className='full-screen center-screen common-background-color'>
            <div className='register-container'>
                <Form style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} onSubmit={e => {e.preventDefault(); submit()}}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" onChange={(c) => setEmail(c.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="name" placeholder="Ingrese su usuario" onChange={(c) => setUser(c.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" onChange={(c) => setPassword(c.target.value)} />
                    </Form.Group>
                    <br />
                    <Button type="submit" className='.signup-button' variant='light'>
                        Registrarme
                    </Button>
                </Form>
            </div>
        </div>
    );
}