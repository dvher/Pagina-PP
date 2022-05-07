import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <div className='full-screen center-screen common-background-color'>
            <div className='login-container'>
                <Form style={{display:'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
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
                        Iniciar sesión
                    </Button>
                    <Form.Text className='text-muted' style={{fontSize: '0.4em'}}>¿No tienes una cuenta? <a href="/register">¡Regístrate!</a></Form.Text>
                </Form>
            </div>
        </div>
    );
}