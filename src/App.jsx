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
      </Container>
      <Footer />
    </div>
  );
}

export default App;
