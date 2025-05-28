import React, { useState } from 'react';

const WireframeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(true);

  const wireframes = [
    {
      id: 1,
      image: '/wireframes/wireframe1.png',
      title: 'Homepage Wireframe',
      description: 'Initial layout design for the main landing page'
    },
    {
      id: 2,
      image: '/wireframes/wireframe2.png',
      title: 'Pet Details Page',
      description: 'Detailed view of individual pet profiles'
    },
    {
      id: 3,
      image: '/wireframes/wireframe3.png',
      title: 'Adoption Flow',
      description: 'Step-by-step process for pet adoption'
    },
    {
      id: 4,
      image: '/wireframes/wireframe4.png',
      title: 'User Dashboard',
      description: 'Personal space for managing adoptions and favorites'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % wireframes.length);
    setShowText(true); // Reset text visibility on slide change
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + wireframes.length) % wireframes.length);
    setShowText(true); // Reset text visibility on slide change
  };

  const toggleText = () => {
    setShowText(prev => !prev);
  };

  return (
    <div style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '1rem',
      padding: '2rem',
      marginBottom: '3rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <h2 style={{ 
        color: '#4b47d6', 
        marginBottom: '1.5rem', 
        fontSize: '2rem' 
      }}>
        Wireframes
      </h2>
      
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          borderRadius: '0.5rem',
          backgroundColor: 'rgba(108, 99, 255, 0.1)',
          border: '1px solid rgba(108, 99, 255, 0.2)'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {wireframes.map((frame, index) => (
              <div
                key={frame.id}
                style={{
                  minWidth: '100%',
                  height: '100%',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={toggleText}
              >
                <img
                  src={frame.image}
                  alt={frame.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{
                  opacity: showText ? 1 : 0,
                  visibility: showText ? 'visible' : 'hidden',
                  transition: 'opacity 0.3s ease, visibility 0.3s ease',
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  width: '80%'
                }}>
                  <h3 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{frame.title}</h3>
                  <p style={{ color: '#2d3436' }}>{frame.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(108, 99, 255, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 2
          }}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(108, 99, 255, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 2
          }}
        >
          →
        </button>

        {/* Slide Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          {wireframes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setShowText(true); // Reset text visibility when changing slides
              }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#4b47d6' : 'rgba(75, 71, 214, 0.3)',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WireframeSlider;
