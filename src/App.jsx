import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import './assets/css/portfolio.css';
import './assets/css/academics.css';
import './assets/css/contact.css';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
