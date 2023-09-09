/* eslint-disable react/prop-types */
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({ name, image, description }) => {
  if (!name || !image || !description) return null;

  const altDesc = `Image of ${name} - ${description} `;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={altDesc} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;
