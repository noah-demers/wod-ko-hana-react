'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Cart3 } from 'react-bootstrap-icons';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <img src="/wod-ko-hana-logo.png" alt="Kō Hana Rum" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ gap: '1rem' }}>
              {[
                'OUR JOURNEY',
                'SHOP',
                'CORPORATE GIFTING',
                'VISIT',
                "'OHANA RUM CLUB",
                'WHERE TO BUY',
                'RECIPES',
              ].map((label, idx) => (
                <Nav.Link key={idx} href="#" style={{ textTransform: 'uppercase' }}>
                  {label}
                </Nav.Link>
              ))}
              <Nav.Link href="#" style={{ padding: 0 }}>
                <Cart3 size={24} color="white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-image">
        <h1 className="hero-title">OUR JOURNEY</h1>
      </section>

      {/* Footer */}
      <footer>
        <Container>
          <Row>
            <Col md={4}>
              <h5>Visit</h5>
              <Nav className="flex-column">
                <Nav.Link href="#">Tasting Room</Nav.Link>
                <Nav.Link href="#">Distillery Tours</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <h5>Shop</h5>
              <Nav className="flex-column">
                <Nav.Link href="#">Rum</Nav.Link>
                <Nav.Link href="#">Merchandise</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <h5>Connect</h5>
              <Nav className="flex-column">
                <Nav.Link href="#">Instagram</Nav.Link>
                <Nav.Link href="#">Facebook</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Book Now Button */}
      <div className="book-now-container">
        <Image
          src="/book_now.png"
          alt="Book Now"
          className="book-now-button"
          width={150}
          height={50}
        />
      </div>
    </>
  );
}
