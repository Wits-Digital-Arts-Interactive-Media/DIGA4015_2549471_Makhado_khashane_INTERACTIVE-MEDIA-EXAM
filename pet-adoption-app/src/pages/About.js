import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth: '960px', margin: '0 auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: 'var(--text)' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center' }}>Our Mission</h1>
      <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        We're dedicated to finding loving homes for pets in need. Our mission is to create lasting bonds between pets and families while promoting responsible pet ownership.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        {[
          { label: '500+', description: 'Pets Adopted' },
          { label: '10+', description: 'Years of Service' },
          { label: '450+', description: 'Happy Families' },
          { label: '95%', description: 'Success Rate' }
        ].map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center', flex: '1 1 150px', backgroundColor: 'var(--gray-100)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.label}</div>
            <div style={{ fontSize: '1.1rem', color: 'var(--gray-600)' }}>{item.description}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>Our Team</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
        <div style={{ backgroundColor: 'var(--gray-100)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dr. Sarah Johnson</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--primary)' }}>Head Veterinarian</p>
          <p>20+ years experience in animal care and welfare</p>
        </div>
        <div style={{ backgroundColor: 'var(--gray-100)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Mike Thompson</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--primary)' }}>Adoption Coordinator</p>
          <p>Dedicated to matching pets with their perfect families</p>
        </div>
        <div style={{ backgroundColor: 'var(--gray-100)', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Lisa Chen</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--primary)' }}>Animal Behaviorist</p>
          <p>Expert in pet behavior and training</p>
        </div>
      </div>

      <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>Our Adoption Process</h2>
      <ol style={{ marginBottom: '4rem', paddingLeft: '1.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
        <li style={{ marginBottom: '1.5rem' }}>
          <strong>1.</strong> Browse - View our available pets and find your perfect match
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <strong>2.</strong> Apply - Submit your adoption application online
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <strong>3.</strong> Meet - Schedule a meeting with your potential new friend
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <strong>4.</strong> Adopt - Complete the adoption process and welcome your new family member
        </li>
      </ol>

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>
          Ready to Start Your Adoption Journey? Browse our available pets and find your perfect companion today.
        </p>
        <Link to="/pets" className="btn btn-primary" style={{ marginRight: '1rem', padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}>
          View Available Pets
        </Link>
        <Link to="/adoption" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}>
          Start Application
        </Link>
      </div>
    </div>
  );
};

export default About;
