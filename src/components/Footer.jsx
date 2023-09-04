const Footer = () => {
  return (
    <footer className="container site-footer">
      <div className="row">
        <div className="col-4 col-sm-2 offset-1">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sites</a>
            </li>
            <li>
              <a href="contactus.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-sm-5 text-center">
          <h5>Social</h5>
          <a href="http://instagram.com/">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="http://facebook.com/">
            <i className="fa-brands fa-facebook fa-xl"></i>
          </a>
          <a href="http://twitter.com/">
            <i className="fa-brands fa-twitter fa-xl"></i>
          </a>
          <a href="http://youtube.com/">
            <i className="fa-brands fa-youtube fa-xl"></i>
          </a>
        </div>
        <div className="col-sm-4 text-center">
          <i className="fa-solid fa-phone fa-lg text-primary"></i>{' '}
          1-206-555-1234
          <br />
          <i className="fa-solid fa-envelope fa-lg text-primary"></i>{' '}
          campsites@nucamp.co
        </div>
      </div>
    </footer>
  );
};

export default Footer;
