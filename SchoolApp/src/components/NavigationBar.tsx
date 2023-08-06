import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(){
  const styles = {
    main : {
      height: "100px",
    },

  };

    return (
      <Navbar bg="dark" data-bs-theme="dark" className="main" style={styles.main}>
        <Container>
          <Navbar.Brand href="#home" style={{fontSize: "22px"}} >School App</Navbar.Brand>
          <Nav className="mr-auto ml-2" style={{fontSize : "20px"}}>
            <Nav.Link style={{ margin: '20px' }} href="#home">Home</Nav.Link>
            <Nav.Link style={{ margin: '20px' }} href="#features">About Us</Nav.Link>
            <Nav.Link style={{ margin: '20px' }} href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;