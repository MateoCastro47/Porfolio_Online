import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;