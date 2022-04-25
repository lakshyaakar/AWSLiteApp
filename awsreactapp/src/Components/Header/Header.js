import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">AWS_Lite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              
              <NavDropdown title="EC2 Service" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/instance/get" >Show Instances</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/instance/create">Create Instance</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="S3 Service" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/buckets/get">Show Buckets</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/buckets/create">Create Bucket</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="IAM Service" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/users/get">Show Users</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/users/create">Create New User</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item as={Link} to="#action/3.4">Show Roles</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.4">Create Role</NavDropdown.Item> */}
              </NavDropdown>
              
            </Nav>
            <Nav>
                <Navbar.Text>
                        Signed in as: <a href="/users/get">AWS User</a>
                </Navbar.Text>            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;