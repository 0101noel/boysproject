import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  //const { cartItems, totalPrice } = location.state;

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Handle payment submission here

    navigate('/');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="PaymentPage">
      {/* {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))} */}
      <Container>
        <h1>Payment Information</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="text" placeholder="Enter card number" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formCardName">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control type="text" placeholder="Enter cardholder name" name="cardName" value={paymentInfo.cardName} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formExpirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" name="expirationDate" value={paymentInfo.expirationDate} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="Enter CVV" name="cvv" value={paymentInfo.cvv} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Billing Address</Form.Label>
            <Form.Control type="text" placeholder="Enter billing address" name="address" value={paymentInfo.address} onChange={handleInputChange} />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Pay ₱{totalPrice}
          </Button> */}
          <Button variant="primary" type="submit">
            Pay
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default PaymentPage;
