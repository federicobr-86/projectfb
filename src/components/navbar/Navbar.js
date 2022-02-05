// Import React Bootstrap components
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';

const NavigationBar = () => { 
return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href='/'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='/'></Nav.Link>
          <NavDropdown title="My React Examples" id="basic-nav-dropdown">
            <NavDropdown.Item href='/search'>Search</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/location'>Geolocation</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavigationBar;
