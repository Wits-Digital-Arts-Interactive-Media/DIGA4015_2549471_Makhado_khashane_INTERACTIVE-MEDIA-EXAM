import React from 'react';

const AdoptionSteps = ({ currentStep }) => {
  const steps = [
    {
      title: 'Personal Info',
      icon: '👤',
      description: 'Basic contact information'
    },
    {
      title: 'Contact Details',
      icon: '📞',
      description: 'How we can reach you'
    },
    {
      title: 'Living Situation',
      icon: '🏠',
      description: 'Your home environment'
    },
    {
      title: 'Final Step',
      icon: '❤️',
      description: 'Almost there!'
    }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '3rem',
      position: 'relative',
      padding: '0 1rem'
    }}>
      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: index <= currentStep ? '#6c63ff' : '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease'
          }}>
            {step.icon}
          </div>
          <div style={{
            textAlign: 'center',
            color: index <= currentStep ? '#4b47d6' : '#999',
            fontSize: '0.9rem',
            maxWidth: '120px'
          }}>
            {step.title}
            <div style={{
              fontSize: '0.8rem',
              color: index <= currentStep ? '#666' : '#999',
              marginTop: '0.25rem'
            }}>
              {step.description}
            </div>
          </div>
        </div>
      ))}
      {/* Progress Line */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50px',
        right: '50px',
        height: '2px',
        backgroundColor: '#e0e0e0',
        zIndex: 0
      }}>
        <div style={{
          width: `${(currentStep / (steps.length - 1)) * 100}%`,
          height: '100%',
          backgroundColor: '#6c63ff',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
};

export default AdoptionSteps;
