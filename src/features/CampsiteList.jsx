/* eslint-disable react/prop-types */
import { useSelector} from 'react-redux';
import { Row, Col } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsites/campsitesSlice';
import Error from '../components/Error';
import Loading from '../components/Loading';

const CampsiteList = () => {
  const campsites = useSelector( selectAllCampsites );
  console.log( 'campsites', campsites );

  const isLoading = useSelector( state => state.campsites.isLoading );
  const errMsg = useSelector( state => state.campsites.errMsg );
  if ( isLoading ) {
    return (<Row><Loading /></Row>);
  }

  if ( errMsg ) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }
  return (
    <Row className="ms-auto">
      {campsites &&
        campsites.map(
          ({ id, name, image, featured, elevation, description }) => (
            <Col
              md="5"
              className="m-4"
              key={id}
              >
              <CampsiteCard
                id={id}
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
