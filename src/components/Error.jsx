import { Col } from 'reactstrap';

// eslint-disable-next-line react/prop-types
const Error = ({ errMsg }) => {
  return (
    <Col>
      <h4>{errMsg}</h4>
    </Col>
  );
};
export default Error;
