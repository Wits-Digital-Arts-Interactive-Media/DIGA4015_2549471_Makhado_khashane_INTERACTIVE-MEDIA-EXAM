import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePetContext } from '../context/PetContext';

const PetDetails = () => {
  const { selectedPet, setSelectedPet } = usePetContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedPet) {
      navigate('/pets');
    }
  }, [selectedPet, navigate]);

  if (!selectedPet) return null;

  const characteristics = [
    'Friendly with children',
    'Good with other pets',
    'House trained',
    'Energetic',
    'Loves outdoor activities'
  ];

  const requirements = [
    'Secure fenced yard',
    'Regular exercise',
    'Consistent training',
    'Regular vet check-ups',
    'Lots of love and attention'
  ];

  const handleAdoptClick = () => {
    navigate('/adoption');
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src={selectedPet.image} 
            alt={selectedPet.name}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '0.5rem'
            }}
          />
        </div>

        <div style={{ padding: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem',
            color: 'var(--primary)',
            marginBottom: '0.5rem'
          }}>
            Meet {selectedPet.name}
          </h1>
          
          <p style={{ 
            color: 'var(--gray-500)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            {selectedPet.breed} • {selectedPet.age}
          </p>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              About
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              {selectedPet.description}
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              Characteristics
            </h2>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {characteristics.map((trait, index) => (
                <li 
                  key={index}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--gray-100)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  {trait}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              Adoption Requirements
            </h2>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {requirements.map((req, index) => (
                <li 
                  key={index}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--gray-100)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ color: 'var(--primary)' }}>•</span>
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <div style={{ 
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <button
              onClick={handleAdoptClick}
              className="btn btn-primary"
              style={{ flex: 1, padding: '1rem' }}
            >
              Adopt {selectedPet.name}
            </button>
            <Link
              to="/pets"
              className="btn btn-secondary"
              style={{ flex: 1, padding: '1rem', textAlign: 'center', textDecoration: 'none' }}
            >
              Back to Pets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
