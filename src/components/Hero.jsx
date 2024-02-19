import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import hero from '../assets/rancho-hero.jpg'

const Hero = () => {
  return (
    <Container className="hero-section">
        <Row>
            <Col lg={5}>
                Left
            </Col>
            <Col lg={7}>
                <div className="hero-right-section">
                    <img src={hero} alt="" className="hero-image" />
                    {/* Hi */}
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero