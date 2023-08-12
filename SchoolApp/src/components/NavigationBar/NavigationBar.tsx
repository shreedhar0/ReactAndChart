import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  const styles = {
    main: {
      height: "100px",
    },
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="main" style={styles.main}>
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: "22px" }}>
          School App
        </Navbar.Brand>
        <Nav className="mr-auto ml-2" style={{ fontSize: "20px" }}>
          <Link
            style={{
              margin: "20px",
              color: "#fff",
              textDecoration: "none",
              listStyleType: "none",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              margin: "20px",
              color: "#fff",
              textDecoration: "none",
              listStyleType: "none",
            }}
            to="/charts"
          >
            Charts
          </Link>
          <Link
            style={{
              margin: "20px",
              color: "#fff",
              textDecoration: "none",
              listStyleType: "none",
            }}
            to="/signup"
          >
            Sign Up
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
