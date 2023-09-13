import { Container } from 'reactstrap';
import CampsitesList from '../features/CampsiteList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Campsites Directory" detail={false} />
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
