import React, { useState } from 'react';

const WireframeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showChanges, setShowChanges] = useState(false);

  const introText = "The following wireframes showcase the evolution from Assignment Two's PETPOINT website to our current Pet Adoption platform. Each wireframe highlights specific changes made to transform the pet-spotting concept into a dedicated adoption service, with detailed explanations of the design decisions and their relevance to improving user experience.";

  const wireframes = [
    {
      id: 1,
      image: '/wireframes/wireframe1.png',
      title: 'Homepage Redesign',
      description: 'Transformation from pet-spotting to adoption-focused homepage',
      changes: [
        'Replaced pet scanning section with adoptable pets gallery',
        'Changed hero message to focus on pet adoption',
        'Added clear call-to-action buttons for adoption process',
        'Simplified navigation to prioritize finding pets'
      ]
    },
    {
      id: 2,
      image: '/wireframes/wireframe2.png',
      title: 'Pet Details Page',
      description: 'Evolution from pet identification to adoption information',
      changes: [
        'Replaced breed identification with detailed pet profiles',
        'Added adoption application button',
        'Included comprehensive pet characteristics section',
        'Enhanced photo gallery for better pet presentation'
      ]
    },
    {
      id: 3,
      image: '/wireframes/wireframe3.png',
      title: 'Achievement System',
      description: 'Gamification elements adapted for adoption process',
      changes: [
        'Converted points system to adoption progress tracking',
        'Added favorite pets functionality',
        'Implemented pet browsing history',
        'Created adoption milestone celebrations'
      ]
    },
    {
      id: 4,
      image: '/wireframes/wireframe5.png',
      title: 'About Page Update',
      description: 'Refocused mission on pet adoption',
      changes: [
        'Updated mission statement for adoption focus',
        'Added team member profiles and roles',
        'Included adoption process explanation',
        'Enhanced visual presentation of our goals'
      ]
    },
    {
      id: 5,
      image: '/wireframes/wireframe6.png',
      title: 'User Interface Updates',
      description: 'Design system adapted for adoption platform',
      changes: [
        'Implemented consistent adoption-focused terminology',
        'Updated color scheme for better accessibility',
        'Enhanced button and form styles',
        'Improved mobile responsiveness'
      ]
    },
    {
      id: 6,
      image: '/wireframes/wireframe7.png',
      title: 'Component Refinements',
      description: 'Core components redesigned for adoption use',
      changes: [
        'Created standardized pet card components',
        'Developed adoption form elements',
        'Added progress indicators for applications',
        'Improved search and filter components'
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % wireframes.length);
    setShowText(true);
    setShowChanges(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + wireframes.length) % wireframes.length);
    setShowText(true);
    setShowChanges(false);
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
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.4); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(108, 99, 255, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -48%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
          }
        `}
      </style>
      <h2 style={{ 
        color: '#4b47d6', 
        marginBottom: '1rem', 
        fontSize: '2rem' 
      }}>
        Wireframes
      </h2>
      
      <p style={{
        color: '#2d3436',
        marginBottom: '2rem',
        lineHeight: '1.6',
        fontSize: '1.1rem'
      }}>
        {introText}
      </p>
      
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '600px',
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
                  position: 'relative'
                }}
              >
                <img
                  src={frame.image}
                  alt={frame.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '500px',
                    objectFit: 'contain',
                    marginBottom: '1rem',
                    filter: showChanges ? 'blur(3px)' : 'none',
                    transition: 'filter 0.3s ease'
                  }}
                />
                
                {/* Info Button */}
                <button
                  onClick={() => setShowChanges(!showChanges)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: showChanges ? '#4b47d6' : 'white',
                    color: showChanges ? 'white' : '#4b47d6',
                    border: '2px solid #4b47d6',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    animation: 'pulse 2s infinite',
                    zIndex: 3,
                    transition: 'all 0.3s ease'
                  }}
                >
                  i
                </button>

                {/* Changes Panel */}
                {showChanges && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    width: '80%',
                    maxWidth: '500px',
                    zIndex: 2,
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    <h3 style={{ 
                      color: '#4b47d6', 
                      marginBottom: '1rem',
                      fontSize: '1.5rem'
                    }}>
                      Design Changes
                    </h3>
                    <ul style={{ 
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {frame.changes.map((change, i) => (
                        <li key={i} style={{
                          marginBottom: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#2d3436'
                        }}>
                          <span style={{
                            color: '#4b47d6',
                            fontWeight: 'bold'
                          }}>•</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div 
                  onClick={() => setShowText(!showText)}
                  style={{
                    opacity: showText && !showChanges ? 1 : 0,
                    visibility: showText && !showChanges ? 'visible' : 'hidden',
                    transition: 'all 0.3s ease',
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    width: '80%',
                    cursor: 'pointer',
                    border: '1px solid rgba(75, 71, 214, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateX(-50%) translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateX(-50%)';
                  }}
                >
                  <h3 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{frame.title}</h3>
                  <p style={{ color: '#2d3436', marginBottom: '0.5rem' }}>{frame.description}</p>
                  <span style={{ 
                    color: '#4b47d6',
                    fontSize: '0.8rem',
                    opacity: 0.7,
                    display: 'block',
                    marginTop: '0.5rem',
                    borderTop: '1px solid rgba(75, 71, 214, 0.1)',
                    paddingTop: '0.5rem'
                  }}>
                    Click to toggle
                  </span>
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
                setShowText(true);
                setShowChanges(false);
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
