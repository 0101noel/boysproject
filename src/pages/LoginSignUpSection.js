import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginSignUpSection.css';
import { getUser, setUser } from './localStorage';


function LoginSignUpSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, password };
    let users = getUser();

    if (isLogin) {
      // Login logic
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        console.log('Login successful');
        // Clear input fields and display success message
        setName('');
        setEmail('');
        setPassword('');
        setError('');
      } else {
        console.log('Invalid email or password');
        // Display error message
        setError('Invalid email or password');
      }
    } else {
      // Signup logic
      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        console.log('User already exists');
        // Display error message
        setError('User already exists');
      } else {
        users.push(userData);
        setUser(users);
        console.log('Registration successful');
        // Clear input fields and display success message
        setName('');
        setEmail('');
        setPassword('');
        setError('');
        setIsLogin(true);
      }
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="form-container">
            <Form onSubmit={handleSubmit}>
              <h1>{isLogin ? 'Sign in' : 'Sign up'}</h1>
              {!isLogin && (
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              )}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLogin ? 'Sign in' : 'Sign up'}
              </Button>
              {isLogin && (
                <Button variant="link" onClick={handleToggle}>
                  Don't have an account? Sign up
                </Button>
              )}
              {!isLogin && (
                <Button variant="link" onClick={handleToggle}>
                  Already have an account? Sign in
                </Button>
              )}
              {error && <div className="error">{error}</div>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSignUpSection;
