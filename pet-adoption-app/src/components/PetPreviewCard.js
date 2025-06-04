import React from 'react';

const PetPreviewCard = ({ pet }) => {
  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1.5rem',
      backgroundColor: 'rgba(108, 99, 255, 0.1)',
      borderRadius: '1rem',
      border: '1px solid #6c63ff',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(108, 99, 255, 0.2)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      <div style={{
        position: 'relative',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #6c63ff'
      }}>
        <img
          src={pet.image}
          alt={pet.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80x80?text=Pet';
          }}
        />
      </div>
      <div>
        <h3 style={{ 
          color: '#4b47d6', 
          marginBottom: '0.5rem', 
          fontSize: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>You're adopting {pet.name}!</span>
          <span style={{ fontSize: '1.5rem' }}>🐾</span>
        </h3>
        <p style={{ 
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>{pet.breed}</span>
          <span>•</span>
          <span>{pet.age}</span>
          {pet.gender && (
            <>
              <span>•</span>
              <span>{pet.gender}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default PetPreviewCard;
