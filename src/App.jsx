import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { Container } from 'reactstrap';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/directory" element={<CampsitesDirectoryPage />} />
          <Route
            path="/directory/:campsiteId"
            element={<CampsiteDetailPage />}
            />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
