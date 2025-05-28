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

      {/* User Research Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>User Research</h2>
        <div>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Target Audience</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#2d3436', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>• Dog Enthusiasts who enjoy spotting and learning about unique breeds</li>
            <li style={{ marginBottom: '0.5rem' }}>• Pet Businesses that want to engage with customers through rewards</li>
            <li style={{ marginBottom: '0.5rem' }}>• Animal Researchers who benefit from crowdsourced rare dog data</li>
          </ul>

          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Personas</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: "Thabo",
                role: "Dog Lover",
                age: "28",
                occupation: "Graphic Designer",
                painPoints: "Loves discovering rare dog breeds but has no platform to share his findings",
                goals: "Wants to upload photos, learn about different breeds, and earn rewards"
              },
              {
                name: "Sarah",
                role: "Pet Store Owner",
                age: "35",
                occupation: "Business Owner",
                painPoints: "Struggles to attract and retain customers in a competitive market",
                goals: "Wants to offer discounts to engaged users and increase store traffic"
              },
              {
                name: "Lerato",
                role: "Stray Dog Rescuer",
                age: "31",
                occupation: "Community Volunteer",
                painPoints: "Struggles to report and track stray dogs efficiently",
                goals: "Wants a simple way to scan, identify, and report stray dogs to nearby shelters"
              }
            ].map((persona, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(108, 99, 255, 0.1)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{persona.name} ({persona.role})</h4>
                <p style={{ marginBottom: '0.5rem', color: '#2d3436' }}><strong>Age:</strong> {persona.age}</p>
                <p style={{ marginBottom: '0.5rem', color: '#2d3436' }}><strong>Occupation:</strong> {persona.occupation}</p>
                <p style={{ marginBottom: '0.5rem', color: '#2d3436' }}><strong>Pain Points:</strong> {persona.painPoints}</p>
                <p style={{ color: '#2d3436' }}><strong>Goals:</strong> {persona.goals}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Design Analysis Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Visual Design Analysis</h2>
        <div>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Style Guide</h3>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>Typography</h4>
            <p style={{ color: '#2d3436' }}>Primary Typeface: Outfit (Google Fonts)</p>
            <p style={{ color: '#2d3436' }}>Characteristics: Geometric, sans-serif, minimal</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>Extended Color Palette</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { name: 'Light Lavender', color: '#D6D8FB', use: 'Background gradient base' },
                { name: 'Soft Blue', color: '#9D96E3', use: 'Interactive elements' },
                { name: 'Deep Purple', color: '#261447', use: 'Contrast and text' },
                { name: 'Blush Pink', color: '#F7B2E3', use: 'Accent and highlights' }
              ].map((color, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  backgroundColor: color.color,
                  borderRadius: '0.5rem',
                  color: color.name === 'Deep Purple' ? 'white' : '#2d3436'
                }}>
                  <p style={{ fontWeight: '600' }}>{color.name}</p>
                  <p>{color.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Development Timeline Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Development Timeline</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {[
            {
              week: "Week 1",
              title: "Research & Wireframing",
              tasks: ["User research and personas", "User journey mapping", "Core page wireframes"]
            },
            {
              week: "Week 2",
              title: "UI Design & Prototyping",
              tasks: ["Style guide creation", "High-fidelity mockups", "Interactive prototyping"]
            },
            {
              week: "Week 3",
              title: "React Setup & Routing",
              tasks: ["Project initialization", "Folder structure setup", "Route implementation"]
            },
            {
              week: "Week 4",
              title: "State Management & Integration",
              tasks: ["Context API setup", "Image upload logic", "AI integration"]
            },
            {
              week: "Week 5",
              title: "Testing & Debugging",
              tasks: ["Unit testing", "Integration testing", "Performance optimization"]
            },
            {
              week: "Week 6",
              title: "Final Touches",
              tasks: ["Polish and feedback", "Documentation", "Final presentation"]
            }
          ].map((week, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(108, 99, 255, 0.1)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}>
              <h3 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{week.week}: {week.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {week.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} style={{ 
                    marginBottom: '0.25rem',
                    color: '#2d3436'
                  }}>• {task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
