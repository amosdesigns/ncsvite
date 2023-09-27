import { useSelector } from 'react-redux';
import { Row, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = useSelector( selectCampsiteById( campsiteId ) );
  console.log('campsite: ', campsite);

  return (
    <Container>
      <SubHeader current="Campsite Detail" detail={true} />
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
