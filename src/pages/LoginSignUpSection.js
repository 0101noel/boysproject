import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './LoginSignUpSection.css'

function LoginSignUpSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Set initial state to login

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, password };
    
    if (isLogin) {
      // Login logic
      const user = JSON.parse(localStorage.getItem(email));
      if (user && user.password === password) {
        console.log('Login successful');
        // Clear input fields and display success message
        setName('');
        setEmail('');
        setPassword('');
      } else {
        console.log('Invalid email or password');
        // Display error message
      }
    } else {
      // Signup logic
      const user = { email, password };
      localStorage.setItem(email, JSON.stringify(user));
      console.log('Registration successful');
      // Clear input fields and display success message
      setName('');
      setEmail('');
      setPassword('');
    }
  };
  

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle state between login and sign up
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
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSignUpSection;
