import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { SHA512 } from 'crypto-js';
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
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);

    const dispatch = useAppDispatch();

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.stopPropagation();
        }
        const data = {
            user,
            pass: SHA512(password).toString()
        }
        axios.post('http://192.168.100.40:5000/api/login', data).then(res => {
            let admin_status = res.data.status;
            if (admin_status === 'OKADM') {
                dispatch({ type: 'SET_ADMIN', name: user });
            }else if(admin_status === 'OK'){
                dispatch({ type: 'SET_USER', name: user });
            }
            setValidated(true);
            window.location.href = '/';
        }).catch(err => {
            setError(err.response.data.error);
        });
    }
    return isLogged ? <>{window.location.href = "/"}</> : (
        <div className='full-screen center-screen common-background-color'>
                <Form noValidate validated={validated} className='login-container' style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} onSubmit={e => {e.preventDefault(); submit(e); setCount(count+1);}}>
                    <Form.Group className="mb-3" controlId="user">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control required autoFocus type="name" placeholder="Ingrese su usuario" onChange={c => setUser(c.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required type="password" placeholder="Ingrese su contraseña" onChange={c => setPassword(c.target.value)} />
                    </Form.Group>
                    {error ? (<Form.Text style={{fontSize: '0.5em', color: 'red'}}>{error}</Form.Text>) : <></>}
                    <Button type="submit" className='.signup-button' variant='light'>
                        Iniciar sesión
                    </Button>
                    <Form.Text className='text-muted' style={{fontSize: '0.5em'}}>¿No tienes una cuenta? <a href="/register">¡Regístrate!</a></Form.Text>
                    {count >= 3 ? (<Form.Text className='text-muted' style={{fontSize: '0.5em'}}><a href='/forgot'>¿Olvidaste tu contraseña?</a></Form.Text>) : <></>}
                </Form>
        </div>
    );
}