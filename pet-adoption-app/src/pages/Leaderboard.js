import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('all time');
  const initialLeaderboardData = [
    {
      rank: 1,
      name: "Sarah Johnson",
      location: "Cape Town, SA",
      adoptions: 42,
      badge: "🏆",
      image: "https://i.pravatar.cc/150?img=1",
      impact: "Saved 42 lives",
      trend: "stable"
    },
    {
      rank: 2,
      name: "Michael Ndlovu",
      location: "Johannesburg, SA",
      adoptions: 38,
      badge: "🥈",
      image: "https://i.pravatar.cc/150?img=2",
      impact: "Saved 38 lives",
      trend: "up"
    },
    {
      rank: 3,
      name: "Emily van der Merwe",
      location: "Durban, SA",
      adoptions: 35,
      badge: "🥉",
      image: "https://i.pravatar.cc/150?img=3",
      impact: "Saved 35 lives",
      trend: "down"
    },
    {
      rank: 4,
      name: "David Molefe",
      location: "Pretoria, SA",
      adoptions: 31,
      image: "https://i.pravatar.cc/150?img=4",
      impact: "Saved 31 lives",
      trend: "up"
    },
    {
      rank: 5,
      name: "Lisa Thompson",
      location: "Port Elizabeth, SA",
      adoptions: 29,
      image: "https://i.pravatar.cc/150?img=5",
      impact: "Saved 29 lives",
      trend: "down"
    },
    {
      rank: 6,
      name: "John Smith",
      location: "Bloemfontein, SA",
      adoptions: 27,
      image: "https://i.pravatar.cc/150?img=6",
      impact: "Saved 27 lives",
      trend: "up"
    },
    {
      rank: 7,
      name: "Thabo Mbeki",
      location: "East London, SA",
      adoptions: 25,
      image: "https://i.pravatar.cc/150?img=7",
      impact: "Saved 25 lives",
      trend: "stable"
    },
    {
      rank: 8,
      name: "Grace Naidoo",
      location: "Kimberley, SA",
      adoptions: 23,
      image: "https://i.pravatar.cc/150?img=8",
      impact: "Saved 23 lives",
      trend: "down"
    },
    {
      rank: 9,
      name: "Peter van Wyk",
      location: "Nelspruit, SA",
      adoptions: 21,
      image: "https://i.pravatar.cc/150?img=9",
      impact: "Saved 21 lives",
      trend: "up"
    },
    {
      rank: 10,
      name: "Nomvula Khumalo",
      location: "Polokwane, SA",
      adoptions: 19,
      image: "https://i.pravatar.cc/150?img=10",
      impact: "Saved 19 lives",
      trend: "stable"
    },
    {
      rank: 11,
      name: "James Wilson",
      location: "George, SA",
      adoptions: 17,
      image: "https://i.pravatar.cc/150?img=11",
      impact: "Saved 17 lives",
      trend: "up"
    },
    {
      rank: 12,
      name: "Zandile Dlamini",
      location: "Rustenburg, SA",
      adoptions: 15,
      image: "https://i.pravatar.cc/150?img=12",
      impact: "Saved 15 lives",
      trend: "down"
    }
  ];

  const [leaderboardData, setLeaderboardData] = useState(initialLeaderboardData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        setLeaderboardData(prevData => {
          const updatedData = prevData.map(user => {
            // Randomly update adoptions (30% chance for each user)
            if (Math.random() > 0.7) {
              const increase = Math.floor(Math.random() * 3) + 1; // 1-3 adoptions increase
              const newAdoptions = user.adoptions + increase;
              return {
                ...user,
                adoptions: newAdoptions,
                impact: `Saved ${newAdoptions} lives`,
                trend: "up"
              };
            }
            return user;
          });

          // Sort by adoptions and update ranks
          const sortedData = updatedData.sort((a, b) => b.adoptions - a.adoptions);
          return sortedData.map((user, idx) => ({
            ...user,
            rank: idx + 1,
            badge: idx === 0 ? "🏆" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : null,
            trend: user.rank < idx + 1 ? "down" : user.rank > idx + 1 ? "up" : "stable"
          }));
        });
      } catch (error) {
        console.error("Error updating leaderboard data:", error);
      }
    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <span style={{ color: '#00b894', marginLeft: '0.5rem' }}>↑</span>;
      case 'down':
        return <span style={{ color: '#d63031', marginLeft: '0.5rem' }}>↓</span>;
      default:
        return <span style={{ color: '#636e72', marginLeft: '0.5rem' }}>•</span>;
    }
  };

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
                minWidth: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
                {user.rank}
                {getTrendIcon(user.trend)}
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
