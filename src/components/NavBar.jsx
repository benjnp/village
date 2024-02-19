import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/ranchologo.jpeg'
import { FaEnvelope, FaFacebook } from "react-icons/fa6";
import { IconContext } from "react-icons";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container className="d-flex flex-row justify-content-between">
        <Navbar.Brand href="#home">
            <img src={logo} alt="bp-icon" height={50}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <span className="navbar-right">
            <div className="social-icons">
                <a href="mailto:benjnp@gmail.com" target="_blank">
                <IconContext.Provider value={{ color: "black"}}>
                    <FaEnvelope />
                </IconContext.Provider>
                </a>
                <a href="https://github.com/benjnp" target="_blank">
                <IconContext.Provider value={{ color: "blue"}}>
                    <FaFacebook />
                </IconContext.Provider>
                </a>
            </div>
            <button href="#contact" className="contact-button">Contact Us</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;