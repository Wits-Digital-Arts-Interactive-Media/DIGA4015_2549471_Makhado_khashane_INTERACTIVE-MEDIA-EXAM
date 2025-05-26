import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import { Pets } from './pages/Pets';
import PetDetails from './pages/PetDetails';
import Adoption from './pages/Adoption';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/adoption" element={<Adoption />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
