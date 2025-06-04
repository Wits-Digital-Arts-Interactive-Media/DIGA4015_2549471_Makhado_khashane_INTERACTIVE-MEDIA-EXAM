import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const teamMembers = [
  {
    name: 'Makhado Khashane',
    role: 'Founder & CEO',
    image: '/assets/Micheal-Ndlovu.png',
    description: 'Passionate about connecting pets with loving homes.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Adoptions',
    image: '/assets/Joe-Zulu.png',
    description: 'Dedicated to ensuring perfect pet-family matches.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Veterinarian',
    image: '/assets/David-Kallaway.png',
    description: 'Expert in pet health and well-being.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  
];

const About = () => {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Our Mission
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            We're dedicated to creating lasting connections between pets and loving families. 
            Our platform makes pet adoption simple, enjoyable, and meaningful.
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {[
            { number: '1000+', label: 'Pets Adopted' },
            { number: '500+', label: 'Happy Families' },
            { number: '50+', label: 'Partner Shelters' },
            { number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '2.5rem', 
                color: '#6c63ff', 
                marginBottom: '0.5rem',
                fontWeight: '700'
              }}>
                <Counter 
                  target={parseInt(stat.number)} 
                  duration={1500} 
                  suffix={stat.label === 'Success Rate' ? '%' : '+'} 
                />
              </div>
              <p style={{
                color: 'white',
                fontSize: '1.1rem'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 style={{
          fontSize: '2.5rem',
          color: 'white',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Meet Our Team
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '100%',
                paddingTop: '100%',
                position: 'relative',
                backgroundColor: '#f0f0f0'
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Team+Member';
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#2d3436',
                  marginBottom: '0.5rem'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#6c63ff',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>
                  {member.role}
                </p>
                <p style={{
                  color: '#666',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5'
                }}>
                  {member.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <a href={member.social.linkedin} style={{
                    color: '#0077b5',
                    textDecoration: 'none',
                    fontSize: '1.5rem'
                  }}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.social.twitter} style={{
                    color: '#1da1f2',
                    textDecoration: 'none',
                    fontSize: '1.5rem'
                  }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          padding: '3rem',
          marginBottom: '4rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Our Values
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '❤️',
                title: 'Compassion',
                description: 'We treat every pet with love and care, ensuring they find their perfect forever home.'
              },
              {
                icon: '🤝',
                title: 'Responsibility',
                description: 'We ensure thorough vetting of both pets and potential adopters.'
              },
              {
                icon: '🏠',
                title: 'Community',
                description: 'We build lasting relationships with pet owners and local shelters.'
              },
              {
                icon: '✨',
                title: 'Innovation',
                description: 'We use technology to make pet adoption simple and accessible.'
              }
            ].map((value, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '1rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
