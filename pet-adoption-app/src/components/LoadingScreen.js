import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Create and preload audio element for bark sound
    const barkSound = new Audio('https://www.free-sounds.net/sound-files/animal-sounds/dog-sounds/DOG10.WAV');
    barkSound.volume = 0.4; // Set volume to 40%
    
    const playBark = async () => {
      try {
        // Reset the audio to start
        barkSound.currentTime = 0;
        // Create a promise to handle audio loading
        const playPromise = barkSound.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (error) {
        console.log('Audio playback failed:', error);
      }
    };

    // Preload the audio
    barkSound.load();
    // Play initial bark after a short delay to ensure audio is loaded
    setTimeout(() => playBark(), 100);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish(), 500);
          return 100;
        }
        // Play bark sound at 45% and 90% progress
        if (prev === 45 || prev === 90) {
          playBark();
        }
        return prev + 5;
      });
    }, 50);

    return () => {
      clearInterval(timer);
      barkSound.pause();
      barkSound.currentTime = 0;
    };
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#6c63ff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      {/* Vector Dog Drawing */}
      <div style={{ 
        marginBottom: '2rem', 
        width: '200px', 
        height: '200px',
        animation: progress >= 50 ? 'wiggle 0.5s ease' : 'none'
      }}>
        <svg viewBox="0 0 512 512" fill="white">
          <path d="M256,44.8c-7.2,0-14.4,1.6-20.8,4.8l-144,72C76.8,129.6,68,144,68,160v156.8c0,16,8.8,30.4,22.4,38.4l144,72
            c6.4,3.2,13.6,4.8,20.8,4.8s14.4-1.6,20.8-4.8l144-72c13.6-8,22.4-22.4,22.4-38.4V160c0-16-8.8-30.4-22.4-38.4l-144-72
            C270.4,46.4,263.2,44.8,256,44.8z M256,76.8l144,72v156.8l-144,72l-144-72V148.8L256,76.8z"/>
          <circle cx="256" cy="192" r="32"/>
          <path d="M208,288c0,26.5,21.5,48,48,48s48-21.5,48-48c0-8.8-7.2-16-16-16h-64C215.2,272,208,279.2,208,288z"/>
          <path d="M144,208c-8.8,0-16,7.2-16,16v64c0,8.8,7.2,16,16,16s16-7.2,16-16v-64C160,215.2,152.8,208,144,208z"/>
          <path d="M368,208c-8.8,0-16,7.2-16,16v64c0,8.8,7.2,16,16,16s16-7.2,16-16v-64C384,215.2,376.8,208,368,208z"/>
        </svg>
      </div>
      <div style={{
        width: '200px',
        height: '200px',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          border: '4px solid rgba(255, 255, 255, 0.3)',
          borderTop: '4px solid white',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          {progress}%
        </div>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes wiggle {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
