import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const P2500 = '₱2500';
const P3000 = '₱3000';

function BuyMaterialsPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCheckout = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    navigate('/payment', { state: { cartItems, totalPrice } });
  };
  

  const products = [
    {
      id: 1,
      name: 'Code Black',
      image: 'img/Black.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 2,
      name: 'Code Beamount Oak',
      image: 'img/Beamount oak.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 3,
      name: 'Code White',
      image: 'img/White.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 4,
      name: 'Code Gray',
      image: 'img/Gray.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 5,
      name: 'Code Light Apple',
      image: 'img/5a.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 6,
      name: 'Code Wallnut',
      image: 'img/6a.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 7,
      name: 'Code Bamboo',
      image: 'img/12a.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 8,
      name: 'Code Light Apple',
      image: 'img/14a.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 9,
      name: 'Code Bamboo Gray',
      image: 'img/13a.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },

  ];

  return (
    <div className="BuyMaterialsPage">
      <header style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        <h1 style={{ marginRight: "auto", marginLeft: "20px" }}>AAC Material Shopping</h1>
        <div className="cart-box" style={{ marginLeft: "auto", marginRight: "20px", marginTop: "15px" }}>
          <div className="cart-icon" onClick={toggleCart}>
            <FontAwesomeIcon icon={faCartArrowDown} size="2x" />
          </div>
          <div className={`whole-cart-window ${showCart ? '' : 'hide'}`}>
            <div className="cart-wrapper">
              <h2>Shopping Cart</h2>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button onClick={handleCheckout} style={{ marginBottom: "15px" }}>Checkout</Button>
          </div>
        </div>
      </header>
      
      <section className="shop-section">
        <Container>
          <Row>
            {products.map((product) => (
              <Col key={product.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default BuyMaterialsPage;
