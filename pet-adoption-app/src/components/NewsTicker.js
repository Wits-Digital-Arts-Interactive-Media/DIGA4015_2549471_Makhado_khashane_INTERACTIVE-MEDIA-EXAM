import React from 'react';

const NewsTicker = () => {
  const newsOutlets = [
    'SABC',
    'DAILY SUN',
    'THE SOWETAN',
    'DRUM',
    'MZANSI MAGIC',
    'CITY PRESS',
    'SUNDAY TIMES',
    'MAIL & GUARDIAN',
    'NEWS24',
    'ETV',
    'CHANNEL O',
    'KAYA FM',
    'METRO FM',
    'YOU MAGAZINE',
    'TRUE LOVE'
  ];

  return (
    <div style={{
      backgroundColor: '#4b47d6',
      color: 'white',
      padding: '0.75rem 0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        animation: 'ticker 8s linear infinite', // Reduced from 10s to 8s
        whiteSpace: 'nowrap'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem',
          paddingLeft: '100%'
        }}>
          <span style={{ 
            fontWeight: '600', 
            marginRight: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            FEATURED ON
          </span>
          {[...newsOutlets, ...newsOutlets].map((outlet, index) => (
            <span key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(5px)',
              minWidth: '120px',
              textAlign: 'center',
              animation: `pulse 2s ease-in-out infinite ${index * 0.1}s`,
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}>
              {outlet}
            </span>
          ))}
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100px',
        background: 'linear-gradient(to right, #4b47d6, transparent)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '100px',
        background: 'linear-gradient(to left, #4b47d6, transparent)',
        zIndex: 1
      }} />
      <style>
        {`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes pulse {
            0% { background-color: rgba(255, 255, 255, 0.1); }
            50% { background-color: rgba(255, 255, 255, 0.15); }
            100% { background-color: rgba(255, 255, 255, 0.1); }
          }
        `}
      </style>
    </div>
  );
};

export default NewsTicker;
