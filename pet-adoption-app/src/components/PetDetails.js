import React from 'react';

const PetDetails = ({ name, breed, age, characteristics, requirements }) => {
  return (
    <div className="pet-details" style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Pet Header */}
      <div style={{
        marginBottom: '2rem',
        borderBottom: '1px solid #eee',
        paddingBottom: '1rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#2d3436',
          marginBottom: '0.5rem'
        }}>
          Meet {name}
        </h2>
        <p style={{
          color: '#636e72',
          fontSize: '1.2rem'
        }}>
          {breed} • {age}
        </p>
      </div>

      {/* Characteristics Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#2d3436',
          marginBottom: '1rem'
        }}>
          About
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {characteristics.map((trait, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '0.5rem'
            }}>
              <span style={{
                color: '#6c63ff',
                fontSize: '1.2rem'
              }}>✓</span>
              <span style={{
                color: '#2d3436',
                fontSize: '1rem'
              }}>{trait}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Section */}
      <div>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#2d3436',
          marginBottom: '1rem'
        }}>
          Adoption Requirements
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {requirements.map((req, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '0.5rem'
            }}>
              <span style={{
                color: '#6c63ff',
                fontSize: '1.2rem'
              }}>•</span>
              <span style={{
                color: '#2d3436',
                fontSize: '1rem'
              }}>{req}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
