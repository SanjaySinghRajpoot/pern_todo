import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, NavbarBrand, Container, NavDropdown, Nav, Navbar, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div width="80%" margin-top="20px">
    <InputGroup className="mb-3" width="80%"> 
    <InputGroup.Text id="basic-addon1">Text</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    </InputGroup>
    </div>
    </>
  );
}

export default App;
