import React, { useContext } from "react";
import { Container, Nav,Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {UserContext} from "../../App"

const Header = () => {

  const {loggedInUser, setLoggedInUser} = useContext(UserContext)
  let history = useHistory();

  const handleLoginBtn = () => {
      if (loggedInUser.email) {
          setLoggedInUser({})
          history.push('/')
      } else {
          history.push('/login')
      }
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"> <img style={{ height: '80px' }} src={`https://i.ibb.co/XFhHPTT/Logo-Makr-0-NRhu4.png`} alt="you-and-me-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/booking">Orders</Nav.Link>
            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
            <Nav.Link as={Link} to="/admin">Dashboard</Nav.Link>
             {/* <Nav.Link as={Link} to="/login" >Login</Nav.Link> */}
             <Nav.Link  onClick={handleLoginBtn} className="nav-link btn btn-dark text-white px-4">
               {loggedInUser.email ? `${loggedInUser.name.split(' ')[0]} / Logout` : 'Login'}                       
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
