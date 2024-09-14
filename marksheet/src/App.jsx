import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPage from './pages/InputPage';
import Marksheet from './pages/Marksheet';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css'; // Import custom CSS

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/marksheet" element={<Marksheet />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
