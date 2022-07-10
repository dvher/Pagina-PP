import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { SHA512 } from 'crypto-js';
import { useAppDispatch } from '../app/hooks';
import { useAppSelector } from '../app/hooks';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import * as yup from 'yup';

const IsAdmin = () => {
    return useAppSelector(state => state);
}

export default function Login() {
    document.title = "Iniciar sesión";
    const isLogged = IsAdmin().user;
    const schema = yup.object().shape({
        user: yup.string().required('El usuario es requerido').max(20, 'El usuario no puede tener más de 20 caracteres'),
        pass: yup.string().required('La contraseña es requerida').min(10, 'La contraseña debe tener al menos 10 caracteres')
    });
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const dispatch = useAppDispatch();

    const submit = ({user, pass}: {user: string, pass: string}) => {
        const data = {
            user,
            pass: SHA512(pass).toString()
        }
        axios.post(`http://${process.env.REACT_APP_BASE_URL}:5000/api/login`, data).then(res => {
            let admin_status = res.data.status;
            if (admin_status === 'OKADM') {
                dispatch({ type: 'SET_ADMIN', name: user });
            }else if(admin_status === 'OK'){
                dispatch({ type: 'SET_USER', name: user });
            }
            window.location.href = '/';
        }).catch(err => {
            console.log(err);
            setError(err.response.data.error);
            setCount(count + 1);
        });
    }
    return isLogged ? <>{window.location.href = "/"}</> : (
        <Formik
            initialValues={{ user: '', pass: '' }}
            onSubmit={values => submit(values)}
            validationSchema={schema}
            validateOnChange={false}
        >
            {({ values, handleChange, handleSubmit, errors, handleBlur }) => (<div className='full-screen center-screen common-background-color'>
                <Form noValidate className='login-container' style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="user">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            value={values.user}
                            name='user'
                            required
                            autoFocus
                            type="name"
                            placeholder="Ingrese su usuario"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isInvalid={!!errors.user}
                        />
                        <Form.Control.Feedback style={{fontSize: '0.5em'}} type="invalid">{errors.user}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                        value={values.pass}
                        name='pass'
                        required
                        type="password"
                        placeholder="Ingrese su contraseña"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={!!errors.pass}
                        />
                        <Form.Control.Feedback style={{fontSize: '0.5em'}} type="invalid">{errors.pass}</Form.Control.Feedback>
                    </Form.Group>
                    {error ? (<Form.Text style={{fontSize: '0.5em', color: 'red'}}>{error}</Form.Text>) : <></>}
                    <Button type="submit" className='.signup-button' variant='light'>
                        Iniciar sesión
                    </Button>
                    <Form.Text className='text-muted' style={{fontSize: '0.5em'}}>¿No tienes una cuenta? <a href="/register">¡Regístrate!</a></Form.Text>
                    {count >= 3 ? (<Form.Text onClick={() => setShow(true)} className='text-muted' style={{fontSize: '0.5em', cursor: 'pointer'}}>¿Olvidaste tu contraseña?</Form.Text>) : <></>}
                </Form>
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
            </div>
            )}
        </Formik>
    );
}