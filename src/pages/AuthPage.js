import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './LoginPage';
import Register from './RegisterPage';

const AuthPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Login />
        </Col>
        <Col>
          <Register />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
