/* eslint-disable react/prop-types */
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
  const { name, image, description } = campsite;
  return (
    <Col md="12" className="m-4">
      <Card>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;
