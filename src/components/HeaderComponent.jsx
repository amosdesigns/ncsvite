import { Container, Navbar,Row,Col, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <Container>
        <Row>
          <Col sm="6" md="1">
            <NavbarBrand href="/">
              <img src={NucampLogo} alt="nucamp logo" />
            </NavbarBrand>
          </Col>
          <Col sm="6" md="11">
            <h1>NuCamp Vite + Jerome</h1>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
