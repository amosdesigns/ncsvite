import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { Container } from 'reactstrap';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<CampsitesDirectoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
