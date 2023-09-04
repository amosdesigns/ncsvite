import { Container } from 'reactstrap';
import CampsiteList  from './features/CampsiteList';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Container>
      <CampsiteList/>
        {/* {CAMPSITES &&
          CAMPSITES.map(({ id, name, image, featured, elevation, description }) => (
            <CampsiteCard
              key={id}
              name={name}
              image={image}
              featured={featured}
              elevation={elevation}
              description={description}
            />
          ))} */}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
