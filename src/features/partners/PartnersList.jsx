/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
  return (
    <Col className="mt-4">
      <Row>
        {partners &&
          partners.map(({ id, ...partner }) => (
            <div className="d-flex mb-5" key={id}>
              <Partner partner={partner} />
            </div>
          ))}
      </Row>
    </Col>
  );
};

export default PartnersList;
