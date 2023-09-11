/* eslint-disable react/prop-types */
import { Row, Col } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsites/campsitesSlice';

const CampsiteList = ({ setCampsiteId }) => {
  const campsites = selectAllCampsites();
  return (
    <Row className="ms-auto">
      {campsites &&
        campsites.map(
          ({ id, name, image, featured, elevation, description }) => (
            <Col
              md="5"
              className="m-4"
              key={id}
              onClick={() => setCampsiteId(id)}>
              <CampsiteCard
                name={name}
                image={image}
                featured={featured}
                elevation={elevation}
                description={description}
              />
            </Col>
          )
        )}
    </Row>
  );
};

export default CampsiteList;
