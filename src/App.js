import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Awards from './components/Awards';
import News from './components/News';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Awards />
      <News />
    </div>
  );
}

export default App;
