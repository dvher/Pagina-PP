import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <div className='full-screen center-screen common-background-color'>
            <div className='register-container'>
                <Form style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="user">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="name" placeholder="Ingrese su usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" />
                    </Form.Group>
                    <br />
                    <Button type='submit' className='.signup-button' variant='light'>
                        Registrarme
                    </Button>
                </Form>
            </div>
        </div>
    );
}