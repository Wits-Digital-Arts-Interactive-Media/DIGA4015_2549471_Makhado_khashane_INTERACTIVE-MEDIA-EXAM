import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto', fontFamily: "'Poppins', sans-serif" }}>
      <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Our Mission</h1>
      <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', color: '#2d3436' }}>
        We're dedicated to finding loving homes for pets in need. Our mission is to create lasting bonds between pets and families while promoting responsible pet ownership.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        {[
          { label: '500+', description: 'Pets Adopted' },
          { label: '10+', description: 'Years of Service' },
          { label: '450+', description: 'Happy Families' },
          { label: '95%', description: 'Success Rate' }
        ].map((item, idx) => (
          <div key={idx} style={{ 
            textAlign: 'center', 
            flex: '1 1 150px', 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            padding: '1.5rem', 
            borderRadius: '0.75rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#6c63ff', marginBottom: '0.5rem' }}>{item.label}</div>
            <div style={{ fontSize: '1.1rem', color: '#2d3436' }}>{item.description}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Our Team</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          padding: '2rem', 
          borderRadius: '0.75rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem', color: '#4b47d6' }}>Dr. Sarah Johnson</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#6c63ff' }}>Head Veterinarian</p>
          <p style={{ color: '#2d3436' }}>20+ years experience in animal care and welfare</p>
        </div>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          padding: '2rem', 
          borderRadius: '0.75rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem', color: '#4b47d6' }}>Mike Thompson</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#6c63ff' }}>Adoption Coordinator</p>
          <p style={{ color: '#2d3436' }}>Dedicated to matching pets with their perfect families</p>
        </div>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          padding: '2rem', 
          borderRadius: '0.75rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem', color: '#4b47d6' }}>Lisa Chen</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#6c63ff' }}>Animal Behaviorist</p>
          <p style={{ color: '#2d3436' }}>Expert in pet behavior and training</p>
        </div>
      </div>

      <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Our Adoption Process</h2>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '4rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
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
              padding: '1.5rem',
              backgroundColor: 'rgba(108, 99, 255, 0.1)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(108, 99, 255, 0.2)'
            }}>
              <h3 style={{ color: '#4b47d6', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#2d3436', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '2rem', borderRadius: '1rem', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#2d3436' }}>
          Ready to Start Your Adoption Journey? Browse our available pets and find your perfect companion today.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pets" className="btn btn-primary" style={{ 
            backgroundColor: '#6c63ff',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            View Available Pets
          </Link>
          <Link to="/adoption" className="btn btn-secondary" style={{ 
            backgroundColor: 'transparent',
            border: '2px solid #6c63ff',
            color: '#6c63ff',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            Start Application
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
