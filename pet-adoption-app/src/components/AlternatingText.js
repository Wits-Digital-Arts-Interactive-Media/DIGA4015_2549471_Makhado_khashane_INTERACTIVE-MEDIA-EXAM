import React, { useState, useEffect } from 'react';

const AlternatingText = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '0.5rem 1rem',
      borderRadius: '2rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      transition: 'opacity 0.3s ease'
    }}>
      <span style={{ 
        color: '#6c63ff',
        fontSize: '1.25rem'
      }}>
        ✓
      </span>
      <span style={{
        color: '#2d3436',
        fontWeight: '500',
        opacity: showFirst ? 1 : 0,
        position: 'absolute',
        left: '2.5rem',
        transition: 'opacity 0.3s ease'
      }}>
        Made by pet lovers
      </span>
      <span style={{
        color: '#2d3436',
        fontWeight: '500',
        opacity: showFirst ? 0 : 1,
        position: 'absolute',
        left: '2.5rem',
        transition: 'opacity 0.3s ease'
      }}>
        Made for pet lovers
      </span>
    </div>
  );
};

export default AlternatingText;
