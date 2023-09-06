import { Container } from 'reactstrap';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Container>
        <CampsitesDirectoryPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
