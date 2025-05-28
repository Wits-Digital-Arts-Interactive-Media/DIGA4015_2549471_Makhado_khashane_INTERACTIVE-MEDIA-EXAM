import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progress = (currentProgress / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      right: '0',
      top: '0',
      width: '8px',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      zIndex: 1000
    }}>
      <div style={{
        width: '100%',
        height: `${scrollProgress}%`,
        background: 'linear-gradient(to bottom, #6c63ff, #f8a5c2)',
        transition: 'height 0.1s'
      }} />
    </div>
  );
};

export default ScrollProgressBar;
