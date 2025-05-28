import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="hero" style={{ 
        textAlign: 'center', 
        padding: '4rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
        justifyContent: 'center'
      }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
  <img 
    src="/assets/dog-hero.png" 
    alt="Happy dog illustration" 
    style={{
      width: '200px',
      marginBottom: '2rem',
      animation: 'float 3s ease-in-out infinite'
    }} 
  />
  <h1 style={{ 
    fontSize: '4rem', 
    marginBottom: '1.5rem',
    color: 'white',
    fontWeight: '700',
    lineHeight: '1.2'
  }}>
    Find your perfect companion today
  </h1>

          <p style={{ 
            fontSize: '1.25rem',
            marginBottom: '2.5rem',
            color: 'white',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Discover loving pets waiting for their forever homes. Our adoption process is simple, and our team is here to help you every step of the way.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <Link to="/pets" style={{
              backgroundColor: '#6c63ff',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.2s ease',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View Available Pets
            </Link>
            <Link to="/adoption" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            >
              Start Adoption
            </Link>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            color: 'white',
            fontWeight: '500',
            fontSize: '1.1rem',
            position: 'relative',
            minWidth: '220px',
            height: '2.5rem',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              transition: 'opacity 0.5s ease',
              opacity: showFirst ? 1 : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                backgroundColor: '#6c63ff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>✓</span>
              Made by pet lovers
            </div>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              transition: 'opacity 0.5s ease',
              opacity: showFirst ? 0 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                backgroundColor: '#6c63ff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>✓</span>
              Made for pet lovers
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: 'white', 
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Why Choose Us
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}>
            We make the adoption process simple and rewarding for both you and your future pet.
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "Verified Pets",
                description: "All our pets are health-checked and temperament-tested to ensure they're ready for their new homes"
              },
              {
                title: "Support System",
                description: "Our team of experts is here to guide you through the adoption process and answer any questions."
              },
              {
                title: "Easy Process",
                description: "Simple, straightforward adoption process with all necessary support and documentation."
              },
              {
                title: "Follow-up Care",
                description: "We provide post-adoption support and check-ins to ensure a smooth transition."
              }
            ].map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}>
                <h3 style={{ 
                  color: '#4b47d6',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    backgroundColor: '#6c63ff',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem'
                  }}>✓</span>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: '#2d3436',
                  lineHeight: '1.6',
                  fontSize: '1.1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
