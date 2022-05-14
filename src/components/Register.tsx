import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { SHA512 } from 'crypto-js';
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
    const [error, setError] = useState('');
    
    const submit = async () => {
        const data = {
            email,
            user,
            pass: SHA512(password).toString()
        }
        axios.post('http://192.168.100.40:5000/api/register', data).then(res => {
            window.location.href = '/';
        }).catch(err => {
            setError(err.response.data.error);
        });
    }
    return isLogged ? <>{window.location.href = "/"}</> : (
        <div className='full-screen center-screen common-background-color'>
            <div className='login-container'>
                <Form style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} onSubmit={e => {e.preventDefault(); submit()}}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" placeholder="Ingrese su email" onChange={(c) => setEmail(c.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="name" placeholder="Ingrese su usuario" onChange={(c) => setUser(c.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" onChange={(c) => setPassword(c.target.value)} />
                    </Form.Group>
                    {error ? (<Form.Text style={{fontSize: '0.5em', color: 'red'}}>{error}</Form.Text>) : <></>}
                    <br />
                    <Button type="submit" className='.signup-button' variant='light'>
                        Registrarme
                    </Button>
                </Form>
            </div>
        </div>
    );
}