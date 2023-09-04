import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

function Header() {
  return (
    <Header>
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={NucampLogo} alt="nucamp logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
    </Header>
  );
}

export default Header;
