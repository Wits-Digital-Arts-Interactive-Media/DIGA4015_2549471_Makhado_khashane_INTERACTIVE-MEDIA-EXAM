import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Breeds from './pages/Breeds'; // Import the new Breeds component

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
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        </Routes>

      </main>
      <ScrollToTop />
      <ScrollProgressBar />
      <Footer />
    </div>
  );
}

export default App;
