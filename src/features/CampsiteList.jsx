import { Row, Col } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { CAMPSITES } from '../app/shared/CAMPSITES';

const CampsiteList = () => {
  return (
  <Row className="ms-auto">
    {CAMPSITES && CAMPSITES.map( ( { id, name, image, featured, elevation, description } ) =>
     <Col md='5' className='m-4' key={id}>
        <CampsiteCard 
        name={name} 
        image={image} 
        featured={featured} 
        elevation={elevation} 
        description={description} 
        />
      </Col>
    )}
  </Row>
  );
};

export default CampsiteList;
