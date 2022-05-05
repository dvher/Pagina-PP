import { useAppSelector } from "../app/hooks";
import { Form, Button } from 'react-bootstrap';

const IsAdmin = () => {
    return useAppSelector(state => state.status);
}

export default function Admin(props: any) {
    return IsAdmin() ? (
        <div className="full-screen center-screen common-background-color">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    ) : <>{window.location.href = '/'}</>
}