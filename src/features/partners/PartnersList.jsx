/* eslint-disable react/prop-types */
import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
  const partners = selectAllPartners();
  return <Col className="mt-4">
    {partners &&
      partners.map( ( { id, ...partner } ) => (
        <div className="d-flex mb-5" key={id}>
          <Partner partner={partner} />
        </div>
      ))}
  </Col>;
};

export default PartnersList;
