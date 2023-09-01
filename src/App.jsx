import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
  const text = `I'm ready for workshop!`;
  return (
    <div className="App">
      <Header />
      <p>{ text }</p>
      <Footer />
    </div>
  );
}

export default App;
