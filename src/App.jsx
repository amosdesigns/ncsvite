import { Container } from 'reactstrap';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
  const text = `I'm ready for workshop!`;
  return (
    <div className="App">
      <Header />
      <Container>
        <p>{text}</p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
