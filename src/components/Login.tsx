import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { sha512 } from 'crypto-hash';
import { useAppDispatch } from '../app/hooks';
import { useAppSelector } from '../app/hooks';

const IsAdmin = () => {
    return useAppSelector(state => state);
}

export default function Login() {
    document.title = "Iniciar sesión";
    const isLogged = IsAdmin().user;
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const submit = async () => {
        const data = {
            user,
            pass: await sha512(password)
        }
        axios.post('http://localhost:5000/api/login', data).then(res => {
            let admin_status = res.data.status;
            if (admin_status === 'OKADM') {
                dispatch({ type: 'SET_ADMIN', name: user });
            }else if(admin_status === 'OK'){
                dispatch({ type: 'SET_USER', name: user });
            }
            window.location.href = '/';
        }).catch(err => {
        });
    }
    return isLogged ? <>{window.location.href = "/"}</> : (
        <div className='full-screen center-screen common-background-color'>
            <div className='login-container'>
                <Form style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} onSubmit={e => {e.preventDefault(); submit();}}>
                    <Form.Group className="mb-3" controlId="user">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="name" placeholder="Ingrese su usuario" onChange={c => setUser(c.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" onChange={c => setPassword(c.target.value)} />
                    </Form.Group>
                    <br />
                    <Button type="submit" className='.signup-button' variant='light'>
                        Iniciar sesión
                    </Button>
                    <Form.Text className='text-muted' style={{fontSize: '0.5em'}}>¿No tienes una cuenta? <a href="/register">¡Regístrate!</a></Form.Text>
                </Form>
            </div>
        </div>
    );
}