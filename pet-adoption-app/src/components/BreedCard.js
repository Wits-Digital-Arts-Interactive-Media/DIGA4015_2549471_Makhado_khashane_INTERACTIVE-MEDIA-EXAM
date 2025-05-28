import React from 'react';

const cardStyle = {
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  margin: '12px',
  width: '280px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const titleStyle = {
  color: 'white',
  margin: '12px 0 8px 0',
  fontSize: '1.25rem',
  fontWeight: '600',
};

const descriptionStyle = {
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: '1.4',
};

const BreedCard = ({ breed, onClick }) => {
  return (
    <div
      style={cardStyle}
      onClick={() => onClick(breed)}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(breed)}
    >
      <img src={breed.imgUrl} alt={breed.name} style={imageStyle} />
      <h3 style={titleStyle}>{breed.name}</h3>
      <p style={descriptionStyle}>
        {breed.description.length > 100
          ? `${breed.description.slice(0, 97)}...`
          : breed.description}
      </p>
    </div>
  );
};

export default BreedCard;
