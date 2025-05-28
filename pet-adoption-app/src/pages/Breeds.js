import React, { useState } from 'react';
import { dogBreeds, catBreeds } from '../lib/breedsData';
import BreedCard from '../components/BreedCard';
import BreedModal from '../components/BreedModal';


const Breeds = () => {
  const [selectedType, setSelectedType] = useState('dog');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);

  const breeds = selectedType === 'dog' ? dogBreeds : catBreeds;

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <div style={{
      padding: '32px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '2.5rem',
          marginBottom: '12px'
        }}>Pet Breeds Explorer</h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.2rem',
          marginBottom: '24px'
        }}>Discover amazing dog and cat breeds</p>
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <button
          type="button"
          onClick={() => setSelectedType('dog')}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            border: `2px solid ${selectedType === 'dog' ? 'white' : 'rgba(255, 255, 255, 0.2)'}`,
            borderRadius: '8px',
            backgroundColor: selectedType === 'dog' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            color: 'white',
            transition: 'all 0.3s ease'
          }}
        >
          Dog Breeds
        </button>
        <button
          type="button"
          onClick={() => setSelectedType('cat')}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            border: `2px solid ${selectedType === 'cat' ? 'white' : 'rgba(255, 255, 255, 0.2)'}`,
            borderRadius: '8px',
            backgroundColor: selectedType === 'cat' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            color: 'white',
            transition: 'all 0.3s ease'
          }}
        >
          Cat Breeds
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '32px'
      }}>
        <input
          type="text"
          placeholder="Search breeds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '12px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px'
      }}>
        {filteredBreeds.length > 0 ? (
          filteredBreeds.map((breed) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              onClick={handleCardClick}
            />
          ))
        ) : (
          <p style={{
            color: 'white',
            fontSize: '1.2rem',
            textAlign: 'center',
            padding: '32px'
          }}>No breeds found matching your search.</p>
        )}
      </div>

      {selectedBreed && (
        <BreedModal
          breed={selectedBreed}
          onClose={() => setSelectedBreed(null)}
        />
      )}
    </div>
  );
};

export default Breeds;
