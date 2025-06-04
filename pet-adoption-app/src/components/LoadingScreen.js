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
    {/* Dog Image */}
<div style={{ 
  marginBottom: '2rem', 
  width: '200px', 
  height: '200px',
  animation: progress >= 50 ? 'wiggle 0.5s ease' : 'none'
}}>
  <img 
    src="/assets/dog.png" 
    alt="Dog"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
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
