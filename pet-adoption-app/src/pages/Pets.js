import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePetContext } from '../context/PetContext';

const Pets = () => {
  const { 
    pets, 
    favorites, 
    addToFavorites, 
    removeFromFavorites, 
    setSelectedPet, 
    loading, 
    error,
    refreshPets 
  } = usePetContext();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredPets = pets.filter(pet => {
    const matchesFilter = filter === 'all' || pet.type.toLowerCase() === filter;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleFavoriteClick = (e, pet) => {
    e.stopPropagation();
    if (favorites.some(fav => fav.id === pet.id)) {
      removeFromFavorites(pet.id);
    } else {
      addToFavorites(pet);
    }
  };

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
    navigate(`/pets/${pet.id}`);
  };

  const handleRefresh = async () => {
    await refreshPets();
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh',
        fontSize: '1.2rem',
        color: 'var(--primary)'
      }}>
        Loading pets...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh',
        color: 'var(--error)'
      }}>
        {error}
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ 
          color: 'var(--primary)',
          fontSize: '2.5rem'
        }}>
          Available Pets
        </h1>
        <button
          onClick={handleRefresh}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ↻ Refresh Pets
        </button>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '3rem',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          minWidth: '300px', 
          flex: '1',
          maxWidth: '500px'
        }}>
          <input
            type="text"
            placeholder="Search pets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '2px solid var(--gray-200)',
              width: '100%',
              fontSize: '1rem',
              transition: 'border-color 0.2s ease',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['all', 'dog', 'cat'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                backgroundColor: filter === type ? 'var(--primary)' : 'var(--gray-200)',
                color: filter === type ? 'white' : 'var(--text)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '1rem',
                fontWeight: '500',
                minWidth: '100px'
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </button>
          ))}
        </div>
      </div>

      {filteredPets.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          color: 'var(--gray-500)',
          backgroundColor: 'var(--gray-100)',
          borderRadius: '0.75rem',
          margin: '2rem 0'
        }}>
          No pets found matching your criteria.
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {filteredPets.map(pet => (
            <div 
              key={pet.id} 
              onClick={() => handlePetClick(pet)}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                border: '1px solid var(--gray-200)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ position: 'relative', paddingTop: '66.67%' }}>
                <img 
                  src={pet.image} 
                  alt={pet.name}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <button
                  onClick={(e) => handleFavoriteClick(e, pet)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: favorites.some(fav => fav.id === pet.id) 
                      ? 'var(--error)' 
                      : 'rgba(255, 255, 255, 0.9)',
                    color: favorites.some(fav => fav.id === pet.id)
                      ? 'white'
                      : 'var(--gray-500)',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  ♥
                </button>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  color: 'var(--primary)',
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {pet.name}
                </h3>
                <p style={{ 
                  color: 'var(--gray-500)',
                  marginBottom: '0.75rem',
                  fontSize: '1.1rem'
                }}>
                  {pet.breed} • {pet.age}
                </p>
                <button 
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1.1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPet(pet);
                    navigate('/adoption');
                  }}
                >
                  Adopt {pet.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Pets };
