import React, { useState, useEffect } from 'react';
import './styles/globals.css';
import { Routes, Route } from 'react-router-dom';
import { PetProvider } from './context/PetContext';
import { AdoptedPetProvider } from './context/AdoptedPetContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import LoadingScreen from './components/LoadingScreen';
import NewsTicker from './components/NewsTicker';
import Home from './pages/Home';
import About from './pages/About';
import { Pets } from './pages/Pets';
import PetDetails from './pages/PetDetails';
import Adoption from './pages/Adoption';
import Design from './pages/Design';
import Leaderboard from './pages/Leaderboard';
import Breeds from './pages/Breeds';
import MyPet from './pages/MyPet';
import Essay from './pages/Essay';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <PetProvider>
      <AdoptedPetProvider>
        <div className="app" style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Navbar />
          <NewsTicker />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/pets/:id" element={<PetDetails />} />
              <Route path="/adoption" element={<Adoption />} />
              <Route path="/design" element={<Design />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/breeds" element={<Breeds />} />
              <Route path="/my-pet/:id" element={<MyPet />} />
              <Route path="/essay" element={<Essay />} />
            </Routes>
          </main>
          <ScrollToTop />
          <ScrollProgressBar />
          <Footer />
        </div>
      </AdoptedPetProvider>
    </PetProvider>
  );
}

export default App;
