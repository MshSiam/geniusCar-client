import { signOut } from "firebase/auth"
import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"
import auth from "../../../firebase.init"
import logo from "../../../images/logo.png"

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <>
      <Navbar
        className="py-4"
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? <Nav.Link href="/addservice">Add Service</Nav.Link> : ""}
              {user ? <Nav.Link href="/orders">Orders</Nav.Link> : ""}
              {user ? (
                <Nav.Link href="/manageservice">Manage Service</Nav.Link>
              ) : (
                ""
              )}
              {user ? (
                <button
                  className="btn btn-danger btn-link text-white text-decoration-none"
                  onClick={handleSignOut}>
                  Log Out
                </button>
              ) : (
                <Nav.Link
                  className="btn btn-success text-white"
                  as={Link}
                  to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
