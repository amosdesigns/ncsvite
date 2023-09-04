import { Container,Row, Col } from 'reactstrap';

const Footer = () => {
  const YDate = new Date().getFullYear();
  const setYearStatement = YDate === 2023 ? YDate : `2023 - ${YDate}`;
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col>
            <small>This will be the site navigation!</small>
            <p><small>&copy;{setYearStatement} Jerome Amos</small></p>
          </Col>
          <Col>
            <h5>Social</h5>
            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
              <i className="fa fa-instagram" />
            </a>{' '}
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
              <i className="fa fa-facebook" />
            </a>{' '}
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
              <i className="fa fa-twitter" />
            </a>{' '}
            <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
              <i className="fa fa-youtube" />
            </a>
          </Col>
          <Col>
           <a href="mailto: mail@bfamcooking.com" className="btn btn-link" role="button">
              mail@bfamcooking.com
            </a>
            <a
              href="tel:+16314507452"
              className="btn btn-link"
              role="button"
              aria-label="to call me click this link">
              +1.631.450.7452
            </a>
           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
