import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/user/register', {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
    }) .then(
        (response) => response.json()
    ) .then((data) => {
        props.updateToken(data.sessionToken)
    }) .catch(err => console.log(err))
};

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} type="password" required/>
                </FormGroup>
                <Button type='submit' style={{margin: '20px 0 10px 0'}}>Sign Up</Button>
            </Form>
        </div>
    )
};

export default Signup;