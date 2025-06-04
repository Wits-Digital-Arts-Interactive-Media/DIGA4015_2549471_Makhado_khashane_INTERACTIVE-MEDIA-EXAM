import React from 'react';
import WireframeSlider from '../components/WireframeSlider';

const Design = () => {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Design System</h1>
      
      {/* Wireframe Slider */}
      <WireframeSlider />

      {/* Color Palette Section */}
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

      {/* Original Typography Section */}
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

      {/* Original Components Section */}
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
          {/* Buttons Section */}
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

          {/* Cards Section */}
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

          {/* Icons Section */}
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>Icons</h3>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Heart Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ff6b6b',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.2rem'
              }}>♥</div>

              {/* Blue Check */}
              <div style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6c63ff',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.2rem'
              }}>✓</div>

              {/* Gold Medal */}
              <div style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffd700',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.2rem',
                boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
              }}>🥇</div>

              {/* Silver Medal */}
              <div style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#c0c0c0',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.2rem',
                boxShadow: '0 2px 8px rgba(192, 192, 192, 0.3)'
              }}>🥈</div>

              {/* Bronze Medal */}
              <div style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#cd7f32',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.2rem',
                boxShadow: '0 2px 8px rgba(205, 127, 50, 0.3)'
              }}>🥉</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>Progress Bar</h3>
            <div style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(108, 99, 255, 0.2)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '60%',
                height: '100%',
                background: 'linear-gradient(to right, #6c63ff, #ff9f43)',
                borderRadius: '2px'
              }}></div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>Scroll to Top</h3>
            <button style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#6c63ff',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(108, 99, 255, 0.3)'
            }}>↑</button>
          </div>

          {/* Vector Dog Image */}
          <div>
            <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>Vector Dog</h3>
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#f8f9fa',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem'
            }}>
              🐕
            </div>
          </div>
        </div>
      </div>

      {/* Original Design Principles Section */}
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

      {/* Original User Research Section */}
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
            <li style={{ marginBottom: '0.5rem' }}>• Potential Pet Parents looking to adopt their perfect companion</li>
            <li style={{ marginBottom: '0.5rem' }}>• Animal Shelters seeking to connect pets with loving homes</li>
            <li style={{ marginBottom: '0.5rem' }}>• Pet Lovers interested in supporting animal welfare</li>
          </ul>

          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Personas</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: "Sarah Chen",
                role: "Young Professional",
                age: "29",
                occupation: "Marketing Manager",
                painPoints: [
                  "Limited time to visit multiple shelters. ",
                  " Anxious about first-time pet ownership",
                  "Needs guidance on pet selection and care"
                ],
                goals: [
                  "Find a pet that fits her apartment lifestyle",
                  "Understand the full commitment of pet ownership",
                  "Connect with experienced pet owners for advice"
                ],
                background: "Lives alone in a pet-friendly apartment, works long hours but wants a companion"
              },
              {
                name: "David & Emma Thompson",
                role: "Family with Childen",
                age: "34 & 36",
                occupation: "Teacher & Healthcare Worker",
                painPoints: [
                  "Need a child-friendly pet",
                  "Concerned about pet behavior with kids",
                  "Want transparent health history"
                ],
                goals: [
                  "Adopt a gentle, family-friendly pet",
                  "Teach children about pet responsibility",
                  "Find a pet that can grow with the family"
                ],
                background: "Parents of two young children (ages 5 and 7), own their home with a fenced yard"
              },
              {
                name: "Margaret Wilson",
                role: "Senior Adopter",
                age: "68",
                occupation: "Retired Teacher",
                painPoints: [
                  "Physical limitations in pet care",
                  "Fixed income considerations",
                  "Worried about long-term commitment"
                ],
                goals: [
                  "Find a calm, low-maintenance companion",
                  "Connect with pet support services",
                  "Understand senior-specific adoption programs"
                ],
                background: "Recently widowed, lives independently, experienced previous pet owner"
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

      {/* Original Visual Design Analysis Section */}
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

      {/* Original Development Timeline Section */}
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
              tasks: ["Context API setup", "Pet Adoption logic", "Leaderboard integration"]
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

      {/* New Mockup Analysis Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Mockup Analysis: Homepage Layout</h2>
        <div style={{ color: '#2d3436' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Navigation Bar</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Minimalistic top bar with evenly spaced links</li>
              <li style={{ marginBottom: '0.5rem' }}>• Brand name ("PETPOINT") prominently positioned and visually anchored</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Hero Section</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Bold headline ("Discover And Capture Rare Pets") supported by a short contextual quote</li>
              <li style={{ marginBottom: '0.5rem' }}>• Two primary call-to-action buttons: "Explore" and "Capture," both clearly styled and positioned</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Affiliation Section</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Logos of reputable local news outlets (e.g., SABC, Daily Sun) reinforce credibility</li>
              <li style={{ marginBottom: '0.5rem' }}>• Dark background creates a necessary visual break from the lighter UI sections</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Informational Panels</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Structured in two-column layouts: icon/illustration on one side, supporting text on the other</li>
              <li style={{ marginBottom: '0.5rem' }}>• Consistent use of CTAs such as "Explore Rewards" and "Capture a Pet"</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Pet Profiles</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• Stylized cards for pet types (e.g., Bull Dog, Sausage Dog, French Bulldog)</li>
              <li style={{ marginBottom: '0.5rem' }}>• Includes common names, scientific names, and a brief description with bullet points</li>
              <li style={{ marginBottom: '0.5rem' }}>• Background contrast enhances readability and draws attention to individual cards</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Closing CTA</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>• A full-width gradient section encouraging user action ("Be A Part Of The Next Big Thing")</li>
              <li style={{ marginBottom: '0.5rem' }}>• Prominent "Get Started" button serves as a concluding interaction point</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(108, 99, 255, 0.1)', borderRadius: '0.75rem' }}>
            <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Evaluation</h3>
            <p style={{ color: '#2d3436', lineHeight: '1.6' }}>
              The layout employs effective spacing, alignment, and visual hierarchy. Each section transitions smoothly into the next, maintaining user interest and supporting an intuitive browsing experience. Visual contrast and typographic clarity are consistently maintained throughout.
            </p>
          </div>
        </div>
      </div>

      {/* New Design System and Usability Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Additional Design System and Usability Considerations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: "Consistency",
              description: "The reuse of fonts, button shapes, and icon styles contributes to a unified and professional design system."
            },
            {
              title: "Accessibility",
              description: "Colour contrast between text and background supports readability for a wider range of users, including those with visual impairments."
            },
            {
              title: "Whitespace and Layout",
              description: "Thoughtful use of whitespace ensures that the interface remains uncluttered and user-friendly."
            },
            {
              title: "Emotional Design",
              description: "The combination of pets, clean visuals, and relatable copywriting strengthens emotional engagement and encourages exploration."
            }
          ].map((item, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(108, 99, 255, 0.1)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}>
              <h3 style={{ color: '#4b47d6', marginBottom: '1rem', fontSize: '1.25rem' }}>{item.title}</h3>
              <p style={{ color: '#2d3436' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Accessibility Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Enhanced Accessibility Features</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>High Contrast Text and Backgrounds</h3>
          <p style={{ color: '#2d3436' }}>All text elements meet or exceed the Web Content Accessibility Guidelines (WCAG) standards for contrast ratio, ensuring clear readability in low-vision scenarios.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Descriptive Alternative Text</h3>
          <p style={{ color: '#2d3436' }}>All images, particularly those showcasing different dog breeds, include descriptive alt attributes for screen reader compatibility.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Keyboard Navigation</h3>
          <p style={{ color: '#2d3436' }}>Full support for keyboard-based interaction, ensuring usability for individuals with motor disabilities or those using assistive technology.</p>
        </div>
      </div>

      {/* Information Architecture Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Information Architecture</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Sitemap</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#2d3436' }}>
            <li style={{ marginBottom: '0.5rem' }}>• Home (Featured Pets, Success Stories)</li>
            <li style={{ marginBottom: '0.5rem' }}>• Available Pets (Search, Filter, Browse)</li>
            <li style={{ marginBottom: '0.5rem' }}>• Adoption Process (Steps, Requirements)</li>
            <li style={{ marginBottom: '0.5rem' }}>• Pet Care Resources (Guides, Tips)</li>
            <li style={{ marginBottom: '0.5rem' }}>• About Us (Mission, Team, Partners)</li>
            <li style={{ marginBottom: '0.5rem' }}>• My Account (Applications, Favorites)</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>User Flow</h3>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: 'rgba(108, 99, 255, 0.1)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(108, 99, 255, 0.2)'
          }}>
            <h4 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Primary Adoption Flow:</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#2d3436' }}>
              <li style={{ marginBottom: '0.5rem' }}>1. Browse Available Pets → Filter by preferences → View detailed profiles</li>
              <li style={{ marginBottom: '0.5rem' }}>2. Save favorites → Complete adoption questionnaire → Schedule meet & greet</li>
              <li style={{ marginBottom: '0.5rem' }}>3. Submit application → Complete home check → Finalize adoption</li>
            </ul>

            <h4 style={{ color: '#4b47d6', margin: '1rem 0' }}>Secondary Flows:</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#2d3436' }}>
              <li style={{ marginBottom: '0.5rem' }}>• Resource Access: Browse care guides → Save relevant information → Set reminders</li>
              <li style={{ marginBottom: '0.5rem' }}>• Post-Adoption: Access support resources → Share success story → Connect with community</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Responsiveness Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>Enhanced Responsiveness Strategy</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Mobile-First Approach</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: "Fluid Grid Layouts",
                description: "Dynamic adaptation using percentage-based grids and media queries. Content stacks vertically on smaller screens."
              },
              {
                title: "Scalable Media",
                description: "Images and videos use relative units (max-width: 100%, height: auto). SVG icons preferred for clarity."
              },
              {
                title: "Touch-Friendly",
                description: "Increased padding (44px minimum) for better touch targets. Swipe-based navigation enabled."
              },
              {
                title: "Typography",
                description: "Font sizes scale using clamp(), em, or rem units for consistent readability across devices."
              }
            ].map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(108, 99, 255, 0.1)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: '#2d3436' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Responsive Components</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: "Stacked Navigation",
                description: "Hamburger menu on mobile with optimized dropdowns. useState toggle for responsive menu control."
              },
              {
                title: "Hero Section",
                description: "Resized fonts, reduced spacing, vertically stacked CTA buttons on mobile."
              },
              {
                title: "Card Layout",
                description: "Three-column to single-column transition with increased touch spacing."
              },
              {
                title: "Footer",
                description: "Vertical stacking of columns and enlarged social/contact icons for mobile."
              }
            ].map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(108, 99, 255, 0.1)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: '#2d3436' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Performance Optimization</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: "Image Optimization",
                description: "Modern compression techniques for optimal file size while maintaining quality. Essential for dog breed photos."
              },
              {
                title: "Lazy Loading",
                description: "Content loaded on-demand to improve initial load time and conserve data usage. Particularly important for mobile users."
              },
              {
                title: "API Caching",
                description: "Local caching of leaderboard entries, user profiles, and map content for improved response times."
              }
            ].map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(108, 99, 255, 0.1)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(108, 99, 255, 0.2)'
              }}>
                <h4 style={{ color: '#4b47d6', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: '#2d3436' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New App Concept Section */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h2 style={{ color: '#4b47d6', marginBottom: '1.5rem', fontSize: '2rem' }}>App Concept and Future Adaptations</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#2d3436', lineHeight: '1.6' }}>
            Our pet adoption platform connects loving homes with pets in need, making the adoption process simple and rewarding. Through detailed pet profiles, adoption guidance, and post-adoption support, we ensure successful matches between pets and their new families.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Key Features</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#2d3436' }}>
            <li style={{ marginBottom: '0.5rem' }}>• Comprehensive Pet Profiles with Detailed Information</li>
            <li style={{ marginBottom: '0.5rem' }}>• Streamlined Adoption Application Process</li>
            <li style={{ marginBottom: '0.5rem' }}>• Post-Adoption Support and Resources</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#4b47d6', marginBottom: '1rem' }}>Design Philosophy</h3>
          <p style={{ color: '#2d3436', lineHeight: '1.6' }}>
            Our design focuses on creating an emotional connection while maintaining professionalism. We use warm colors, friendly typography, and clear navigation to make the adoption journey both heartwarming and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
