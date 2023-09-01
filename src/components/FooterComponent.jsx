import { Container } from 'reactstrap';

const Footer = () => {
  const YDate = new Date().getFullYear();
  const setYearStatement = YDate === 2023 ? YDate : `2023 - ${YDate}`;
  return (
    <footer>
      <Container>&copy; {setYearStatement} Jerome Amos</Container>
     </footer>
  );
};

export default Footer;
