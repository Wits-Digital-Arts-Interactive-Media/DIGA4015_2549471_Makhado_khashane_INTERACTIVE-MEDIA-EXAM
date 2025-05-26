import React from 'react';

const Design = () => {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Design System</h1>
      
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Color Palette</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { name: 'Primary', color: '#6c63ff' },
            { name: 'Primary Dark', color: '#4b47d6' },
            { name: 'Secondary', color: '#a29bfe' },
            { name: 'Accent', color: '#f8a5c2' }
          ].map((color, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ 
                height: '100px', 
                backgroundColor: color.color,
                borderRadius: '0.5rem',
                marginBottom: '0.5rem'
              }}></div>
              <p style={{ color: '#2d3436', fontWeight: '500' }}>{color.name}</p>
              <p style={{ color: '#636e72', fontSize: '0.875rem' }}>{color.color}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Typography</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h1 style={{ color: '#2d3436', marginBottom: '0.5rem' }}>Heading 1</h1>
            <p style={{ color: '#636e72' }}>Font: Poppins, Size: 3rem, Weight: 700</p>
          </div>
          <div>
            <h2 style={{ color: '#2d3436', marginBottom: '0.5rem' }}>Heading 2</h2>
            <p style={{ color: '#636e72' }}>Font: Poppins, Size: 2.5rem, Weight: 700</p>
          </div>
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '0.5rem' }}>Heading 3</h3>
            <p style={{ color: '#636e72' }}>Font: Poppins, Size: 2rem, Weight: 600</p>
          </div>
          <div>
            <p style={{ color: '#2d3436', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Body Text</p>
            <p style={{ color: '#636e72' }}>Font: Poppins, Size: 1.1rem, Weight: 400</p>
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Components</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>Buttons</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button style={{
                backgroundColor: '#6c63ff',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: '600'
              }}>Primary Button</button>
              <button style={{
                backgroundColor: 'transparent',
                border: '2px solid #6c63ff',
                color: '#6c63ff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600'
              }}>Secondary Button</button>
            </div>
          </div>
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>Cards</h3>
            <div style={{
              backgroundColor: 'rgba(108, 99, 255, 0.1)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}>
              <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>Card Title</h4>
              <p style={{ color: '#2d3436' }}>Card content with a subtle background.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Design Principles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: "Modern & Clean",
              description: "Minimalist design with ample white space and clear hierarchy."
            },
            {
              title: "Accessible",
              description: "High contrast ratios and readable typography for all users."
            },
            {
              title: "Consistent",
              description: "Unified design language across all components and pages."
            },
            {
              title: "Responsive",
              description: "Fluid layouts that adapt seamlessly to all screen sizes."
            }
          ].map((principle, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(108, 99, 255, 0.1)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}>
              <h3 style={{ color: '#4b47d6', marginBottom: '1rem', fontSize: '1.25rem' }}>
                {principle.title}
              </h3>
              <p style={{ color: '#2d3436' }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
