import React, { useState } from 'react';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('all time');

  const leaderboardData = [
    {
      rank: 1,
      name: "Sarah Johnson",
      location: "Cape Town, SA",
      adoptions: 12,
      badge: "🏆",
      image: "https://i.pravatar.cc/150?img=1",
      impact: "Saved 12 lives"
    },
    {
      rank: 2,
      name: "Michael Ndlovu",
      location: "Johannesburg, SA",
      adoptions: 10,
      badge: "🥈",
      image: "https://i.pravatar.cc/150?img=2",
      impact: "Saved 10 lives"
    },
    {
      rank: 3,
      name: "Emily van der Merwe",
      location: "Durban, SA",
      adoptions: 8,
      badge: "🥉",
      image: "https://i.pravatar.cc/150?img=3",
      impact: "Saved 8 lives"
    },
    {
      rank: 4,
      name: "David Molefe",
      location: "Pretoria, SA",
      adoptions: 7,
      image: "https://i.pravatar.cc/150?img=4",
      impact: "Saved 7 lives"
    },
    {
      rank: 5,
      name: "Lisa Thompson",
      location: "Port Elizabeth, SA",
      adoptions: 6,
      image: "https://i.pravatar.cc/150?img=5",
      impact: "Saved 6 lives"
    }
  ];

  return (
    <div style={{ padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ 
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{ 
            color: 'white',
            fontSize: '3rem',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Top Adopters Leaderboard
          </h1>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Celebrating those who make the biggest impact in pet adoption
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            {['All Time', 'This Month', 'This Week'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFilter(period.toLowerCase())}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: timeFilter === period.toLowerCase() ? '#6c63ff' : 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
                onMouseEnter={e => {
                  if (timeFilter !== period.toLowerCase()) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={e => {
                  if (timeFilter !== period.toLowerCase()) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index === 0 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.95)',
                borderRadius: '1rem',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: index === 0 ? '1px solid rgba(255, 215, 0, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                fontSize: '2rem',
                fontWeight: 'bold',
                color: index === 0 ? '#FFD700' : '#4b47d6',
                minWidth: '40px'
              }}>
                {user.rank}
              </div>
              
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: index === 0 ? '3px solid #FFD700' : '3px solid #6c63ff'
              }}>
                <img 
                  src={user.image} 
                  alt={user.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.25rem'
                }}>
                  <h3 style={{ 
                    color: '#2d3436',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    {user.name}
                  </h3>
                  {user.badge && (
                    <span style={{ 
                      fontSize: '1.5rem',
                      animation: 'bounce 1s infinite'
                    }}>
                      {user.badge}
                    </span>
                  )}
                </div>
                <p style={{ 
                  color: '#636e72',
                  fontSize: '0.9rem'
                }}>
                  {user.location}
                </p>
              </div>
              
              <div style={{ 
                textAlign: 'right',
                color: index === 0 ? '#FFD700' : '#4b47d6'
              }}>
                <div style={{ 
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '0.25rem'
                }}>
                  {user.adoptions}
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: '#636e72'
                }}>
                  {user.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default Leaderboard;
