import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdoptedPet } from '../context/AdoptedPetContext';

const MyPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAdoptedPet, updatePetStats, addPetActivity } = useAdoptedPet();
  const [showActivityLog, setShowActivityLog] = useState(false);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const adoptedPet = getAdoptedPet(id);
    if (!adoptedPet) {
      navigate('/pets');
      return;
    }
    setPet(adoptedPet);
  }, [id, getAdoptedPet, navigate]);

  if (!pet) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh',
        color: 'var(--primary)'
      }}>
        Loading...
      </div>
    );
  }

  const getStatusColor = (value) => {
    if (value > 70) return '#4CAF50';
    if (value > 30) return '#FFC107';
    return '#f44336';
  };

  const handleAction = (type) => {
    switch (type) {
      case 'feed':
        updatePetStats(id, {
          hunger: Math.min(100, pet.stats.hunger + 30),
          energy: Math.min(100, pet.stats.energy + 10)
        });
        addPetActivity(id, {
          type: 'feed',
          description: `Fed ${pet.name} a healthy meal`
        });
        break;

      case 'play':
        updatePetStats(id, {
          happiness: Math.min(100, pet.stats.happiness + 20),
          energy: Math.max(0, pet.stats.energy - 20),
          hunger: Math.max(0, pet.stats.hunger - 10)
        });
        addPetActivity(id, {
          type: 'play',
          description: `Played with ${pet.name}`
        });
        break;

      case 'sleep':
        updatePetStats(id, {
          energy: Math.min(100, pet.stats.energy + 40),
          sleepiness: 0
        });
        addPetActivity(id, {
          type: 'sleep',
          description: `${pet.name} took a nap`
        });
        break;

      default:
        break;
    }
  };

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Pet Profile Card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '1rem',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #6c63ff, #ff69b4)',
                opacity: 0.1
              }}></div>
              <img
                src={pet.image}
                alt={pet.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h1 style={{ fontSize: '2.5rem', color: '#4b47d6', marginBottom: '0.5rem' }}>{pet.name}</h1>
              <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '1rem' }}>
                {pet.breed} • {pet.age}
              </p>
              
              {/* Stats */}
              <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                {[
                  { label: 'Energy', value: pet.stats.energy },
                  { label: 'Hunger', value: pet.stats.hunger },
                  { label: 'Happiness', value: pet.stats.happiness },
                  { label: 'Sleepiness', value: pet.stats.sleepiness }
                ].map((stat, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ color: '#666' }}>{stat.label}</span>
                      <span style={{ color: getStatusColor(stat.value) }}>{stat.value}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#eee',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${stat.value}%`,
                        height: '100%',
                        backgroundColor: getStatusColor(stat.value),
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {[
            { label: 'Feed Pet', action: () => handleAction('feed'), icon: '🍖', disabled: pet.stats.hunger >= 100 },
            { label: 'Play Time', action: () => handleAction('play'), icon: '🎾', disabled: pet.stats.energy <= 0 },
            { label: 'Sleep Time', action: () => handleAction('sleep'), icon: '💤', disabled: pet.stats.sleepiness <= 0 }
          ].map((button, index) => (
            <button
              key={index}
              onClick={button.action}
              disabled={button.disabled}
              style={{
                padding: '1rem',
                fontSize: '1.1rem',
                backgroundColor: button.disabled ? '#ccc' : '#6c63ff',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: button.disabled ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={e => {
                if (!button.disabled) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={e => {
                if (!button.disabled) {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{button.icon}</span>
              {button.label}
            </button>
          ))}
        </div>

        {/* Activity Log */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h2 style={{ color: '#4b47d6', fontSize: '1.5rem' }}>Activity Log</h2>
            <button
              onClick={() => setShowActivityLog(!showActivityLog)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#6c63ff',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              {showActivityLog ? 'Hide' : 'Show'} Log
            </button>
          </div>
          
          {showActivityLog && (
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {pet.activities.map((activity, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{
                    fontSize: '1.5rem',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {activity.type === 'feed' ? '🍖' : activity.type === 'play' ? '🎾' : '💤'}
                  </span>
                  <div>
                    <p style={{ color: '#2d3436', marginBottom: '0.25rem' }}>{activity.description}</p>
                    <p style={{ color: '#666', fontSize: '0.875rem' }}>
                      {new Date(activity.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPet;
