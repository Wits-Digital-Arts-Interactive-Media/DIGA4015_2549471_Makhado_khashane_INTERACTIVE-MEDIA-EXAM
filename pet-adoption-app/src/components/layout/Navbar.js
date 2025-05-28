import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div>
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
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
              color: 'white',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/pets"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Pets
          </NavLink>

          <NavLink 
            to="/breeds"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Breeds
          </NavLink>
          
          <NavLink 
            to="/leaderboard"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Leaderboard
          </NavLink>
          
          <NavLink 
            to="/adoption"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
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
              color: 'white',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            About
          </NavLink>

          <NavLink 
            to="/design"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Design
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
