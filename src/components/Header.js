import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { logout } from "../reducers/userReducers";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={userInfo ? "/home" : "/"}>
            <Navbar.Brand>Fam Chat</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              {!userInfo && (
                <LinkContainer to="/signup">
                  <Nav.Link>
                    <i className="fas fa-user-plus"></i> Register
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo ? (
                <>
                  <LinkContainer to="/profile">
                    <Nav.Link>{userInfo.data.username}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/chat">
                    <Nav.Link>Chat</Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
