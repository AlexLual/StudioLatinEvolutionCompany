import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";



function ColorSchemesExample() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Studio Latin Evolution</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Bailarines</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Historia</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ColorSchemesExample;
