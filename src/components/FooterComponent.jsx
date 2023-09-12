import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const YDate = new Date().getFullYear();
  const setYearStatement = YDate === 2023 ? YDate : `2023 - ${YDate}`;
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/directory">Directory</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <p>
              <small>&copy;{setYearStatement} Jerome Amos</small>
            </p>
          </Col>
          <Col>
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/Bfamcooking">
              <i className="fa fa-instagram" />
            </a>{' '}
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/BFAMCOOKING/">
              <i className="fa fa-facebook" />
            </a>{' '}
            <a
              className="btn btn-social-icon btn-twitter"
              href="https://twitter.com/Bfamcooking">
              <i className="fa fa-twitter" />
            </a>{' '}
            <a
              className="btn btn-social-icon btn-google"
              href="https://youtube.com/c/bfamcooking?sub_confirmation=1">
              <i className="fa fa-youtube" />
            </a>
          </Col>
          <Col>
            <Row>
              <a
                href="mailto: mail@bfamcooking.com"
                className="btn btn-link"
                role="button">
                mail@bfamcooking.com
              </a>
            </Row>
            <Row>
              <a
                href="tel:+16314507452"
                className="btn btn-link"
                role="button"
                aria-label="to call me click this link">
                +1.631.450.7452
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
