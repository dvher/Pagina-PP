import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { SHA512 } from 'crypto-js';
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { Formik } from 'formik';
import * as yup from 'yup';

const IsAdmin = () => {
    return useAppSelector(state => state);
}

export default function Register() {
    document.title = "Registrarse";
    const schema = yup.object().shape({
        user: yup.string().required('El usuario es requerido').max(20, 'El usuario no puede tener más de 20 caracteres').min(6, 'El usuario debe tener al menos 6 caracteres'),
        email: yup.string().required('El correo es requerido').email('El correo no es válido'),
        pass: yup.string().required('La contraseña es requerida').min(10, 'La contraseña debe tener al menos 10 caracteres'),
        confirmpass: yup.string().required('La contraseña es requerida').oneOf([yup.ref('pass'), null], 'Las contraseñas no coinciden')
    });
    const isLogged = IsAdmin().user;
    const [error, setError] = useState('');
    
    const submit = ({email, user, pass, confirmpass}: {email: string, user: string, pass: string, confirmpass: string}) => {
        const data = {
            email,
            user,
            pass: SHA512(pass).toString(),
            confirmpass: SHA512(confirmpass).toString()
        }
        axios.post(`http://${process.env.REACT_APP_BASE_URL}:5000/api/register`, data).then(() => {
            window.location.href = '/';
        }).catch(err => {
            setError(err.response.data.error);
        });
    }
    return isLogged ? <>{window.location.href = "/"}</> : (
        <Formik
            initialValues={{ email: '', user: '', pass: '', confirmpass: '' }}
            onSubmit={values => submit(values)}
            validationSchema={schema}
            validateOnChange={false}
        >
            {({ values, handleChange, handleSubmit, errors, handleBlur }) => (
                <div className='full-screen center-screen common-background-color'>
                    <Form noValidate className='login-container' style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name='email'
                                value={values.email}
                                required
                                autoFocus
                                type="email"
                                placeholder="Ingrese su email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback style={{fontSize: '0.5em'}} type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="user">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                name='user'
                                value={values.user}
                                required
                                type="name"
                                placeholder="Ingrese su usuario"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.user}
                            />
                            <Form.Control.Feedback style={{fontSize: '0.5em'}}  type="invalid">{errors.user}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                name='pass'
                                value={values.pass}
                                required
                                type="password"
                                placeholder="Ingrese su contraseña"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.pass}
                            />
                            <Form.Control.Feedback style={{fontSize: '0.5em'}}  type="invalid">{errors.pass}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmpass">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                                name='confirmpass'
                                value={values.confirmpass}
                                required
                                type="password"
                                placeholder="Ingrese su contraseña"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.confirmpass}
                            />
                            <Form.Control.Feedback style={{fontSize: '0.5em'}}  type="invalid">{errors.confirmpass}</Form.Control.Feedback>
                        </Form.Group>
                        {error && <Form.Text style={{color: 'red', fontSize: '0.5em'}}>{error}</Form.Text>}
                        <br />
                        <Button type="submit" className='.signup-button' variant='light'>
                            Registrarme
                        </Button>
                    </Form>
                </div>
            )}
         </Formik>
        
    );
}