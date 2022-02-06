import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';

// Top Navigation bar with links
const NavigationBar = () => { 
const navigate = useNavigate();
return(
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href='/'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='/'></Nav.Link>
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => navigate('search')}>Search App</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => navigate('location')}>Geolocation App</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavigationBar;
