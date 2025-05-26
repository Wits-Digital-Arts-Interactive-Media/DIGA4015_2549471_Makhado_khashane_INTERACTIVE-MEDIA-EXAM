import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--primary)',
            textDecoration: 'none'
          }}>
            Pet Adoption
          </Link>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <NavLink 
            to="/" 
            end
            style={({ isActive }) => ({
              color: isActive ? 'var(--primary)' : 'var(--text)',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid var(--primary)' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/pets"
            style={({ isActive }) => ({
              color: isActive ? 'var(--primary)' : 'var(--text)',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid var(--primary)' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Pets
          </NavLink>
          
          <NavLink 
            to="/adoption"
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'white',
              textDecoration: 'none',
              backgroundColor: isActive ? 'var(--primary-dark)' : 'var(--primary)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s ease'
            })}
          >
            Adoption
          </NavLink>

          <NavLink 
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'var(--primary)' : 'var(--text)',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid var(--primary)' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
