import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap"; // Import Nav component
import "../css/components/navbar.css";
import "../css/styleguide.css";

function Navigation() {
  return (
    <BootstrapNavbar expand="lg">
      <Container fluid>
        <BootstrapNavbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/dgtsw62j3/image/upload/v1706884147/E-Learning%20Educational/Logo_1_dkyiun.png"
            alt="logo"
            width={40}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/Home" className="nav-links">
              Home
            </Nav.Link>
            <Nav.Link href="/Course" className="nav-links">
              Course
            </Nav.Link>
            <Nav.Link href="/About Us" className="nav-links">
              About Us
            </Nav.Link>
            <Nav.Link href="/Pricing" className="nav-links">
              Pricing
            </Nav.Link>
            <Nav.Link href="/Contact" className="nav-links">
              Contact
            </Nav.Link>
          </Nav>
          <div className="btn ">
            <a href="/signup" className="button">
              Sign Up
            </a>
            <a href="/login" className="button">
              Login
            </a>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navigation;
