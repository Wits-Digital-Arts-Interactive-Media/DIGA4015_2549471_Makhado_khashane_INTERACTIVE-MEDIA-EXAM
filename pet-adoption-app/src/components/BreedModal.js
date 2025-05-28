import React, { useEffect } from 'react';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(5px)',
};

const modalStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: '16px',
  maxWidth: '600px',
  width: '90%',
  padding: '24px',
  textAlign: 'center',
  position: 'relative',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  fontSize: '1.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  transition: 'all 0.2s ease',
};

const titleStyle = {
  color: 'white',
  fontSize: '2rem',
  marginBottom: '16px',
  fontWeight: '600',
};

const descriptionStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  lineHeight: '1.6',
  fontSize: '1.1rem',
  maxWidth: '500px',
  margin: '0 auto',
};

const BreedModal = ({ breed, onClose }) => {
  //   running this hook, regardless of `breed`'s presence
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  //  Conditional return after hook call (safe now)
  if (!breed) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={closeButtonStyle}
          onClick={onClose}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Close modal"
        >
          ×
        </button>
        <img src={breed.imgUrl} alt={breed.name} style={imageStyle} />
        <h2 style={titleStyle}>{breed.name}</h2>
        <p style={descriptionStyle}>{breed.description}</p>
      </div>
    </div>
  );
};

export default BreedModal;
