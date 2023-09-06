import { Card, CardImg, CardTitle } from 'reactstrap';

const CampsiteCard = ({ campsite }) => {
  console.log(campsite);
  const [image, name] = campsite;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};

export default CampsiteCard;
