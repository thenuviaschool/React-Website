import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Notifications from './pages/Notifications';
import Timings from './pages/Timings';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Locate from './pages/Locate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/timings" element={<Timings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locate" element={<Locate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;