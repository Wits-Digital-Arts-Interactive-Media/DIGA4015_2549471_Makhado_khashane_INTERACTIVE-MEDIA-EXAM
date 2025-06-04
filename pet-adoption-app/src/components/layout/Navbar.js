import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAdoptedPet } from '../../context/AdoptedPetContext';

const Navbar = () => {
  const { adoptedPets } = useAdoptedPet();

  // Styles
  const navStyle = ({ isActive }) => ({
    color: 'white',
    textDecoration: 'none',
    borderBottom: isActive ? '2px solid white' : 'none',
    paddingBottom: '0.25rem'
  });

  const activeButtonStyle = ({ isActive }) => ({
    color: 'white',
    textDecoration: 'none',
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.2s ease'
  });

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
        {/* Logo */}
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

        {/* Nav Links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <NavLink to="/" end style={navStyle}>
            Home
          </NavLink>

          <NavLink to="/pets" style={navStyle}>
            Pets
          </NavLink>

          <NavLink to="/breeds" style={navStyle}>
            Breeds
          </NavLink>

          <NavLink to="/adoption" style={activeButtonStyle}>
            Adoption
          </NavLink>

          {adoptedPets.length > 0 && (
            <NavLink 
              to={`/my-pet/${adoptedPets[0].id}`} 
              style={({ isActive }) => ({
                ...activeButtonStyle({ isActive }),
                backgroundColor: isActive ? 'rgba(108, 99, 255, 0.3)' : 'rgba(108, 99, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              })}
            >
              <span style={{ fontSize: '1.2rem' }}>🐾</span>
              My Pet
              {adoptedPets.length > 1 && (
                <span style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem'
                }}>
                  {adoptedPets.length}
                </span>
              )}
            </NavLink>
          )}

          <NavLink to="/leaderboard" style={navStyle}>
            Leaderboard
          </NavLink>

          <NavLink to="/design" style={navStyle}>
            Design
          </NavLink>

          <NavLink to="/about" style={navStyle}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
