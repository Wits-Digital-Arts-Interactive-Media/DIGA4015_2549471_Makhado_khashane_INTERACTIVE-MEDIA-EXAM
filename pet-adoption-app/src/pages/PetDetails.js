import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePetContext } from '../context/PetContext';
import PetDetails from '../components/PetDetails';

const PetDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pets } = usePetContext();

  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        gap: '1rem'
      }}>
        <h2 style={{ color: 'white' }}>Pet not found</h2>
        <button
          onClick={() => navigate('/pets')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6c63ff',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Back to Pets
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Pet Image Section */}
        <div style={{
          width: '100%',
          height: '400px',
          borderRadius: '1rem',
          overflow: 'hidden',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <img
            src={pet.image}
            alt={pet.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <button
            onClick={() => navigate('/pets')}
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            ← Back to Pets
          </button>
        </div>

        {/* Pet Details Component */}
        <PetDetails
          name={pet.name}
          breed={pet.breed}
          age={pet.age}
          characteristics={[
            'Friendly with children',
            'Good with other pets',
            'House trained',
            'Energetic',
            'Loves outdoor activities'
          ]}
          requirements={[
            'Secure fenced yard',
            'Regular exercise',
            'Consistent training',
            'Regular vet check-ups',
            'Lots of love and attention'
          ]}
        />

        {/* Adoption Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <button
            onClick={() => navigate('/adoption')}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#6c63ff',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 99, 255, 0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>🐾</span>
            Adopt {pet.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
