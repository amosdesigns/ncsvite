/* eslint-disable react/prop-types */
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ id, name, image, description }) => {
  if (!name || !image || !description) return null;

  const altDesc = `Image of ${name} - ${description} `;

  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={altDesc} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;
