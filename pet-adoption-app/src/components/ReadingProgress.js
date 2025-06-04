import React, { useEffect } from 'react';

const ReadingProgress = () => {
  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      const progressBar = document.getElementById('readingProgress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      zIndex: 1000
    }}>
      <div
        id="readingProgress"
        style={{
          width: '0%',
          height: '100%',
          backgroundColor: '#6c63ff',
          transition: 'width 0.2s ease'
        }}
      />
    </div>
  );
};

export default ReadingProgress;
