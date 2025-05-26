import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialIcons = {
    Facebook: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
      </svg>
    ),
    Twitter: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"/>
      </svg>
    )
  };

  return (
    <footer style={{
      backgroundColor: '#4b47d6',
      color: 'white',
      padding: '4rem 0 2rem',
      marginTop: '4rem'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>Pet Adoption</h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: '1.6',
              fontSize: '1.1rem'
            }}>
              Making pet adoption simple, safe, and joyful for both pets and their new families.
            </p>
          </div>
          
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>Quick Links</h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem' 
            }}>
              <Link to="/pets" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'color 0.2s ease'
              }}>Available Pets</Link>
              <Link to="/adoption" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'color 0.2s ease'
              }}>Adoption Process</Link>
              <Link to="/leaderboard" style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'color 0.2s ease'
              }}>Leaderboard</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>Contact</h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem', 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem'
            }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✉</span> info@petadoption.com
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📞</span> (011) 123-4567
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📍</span> 123 Pet Street, Johannesburg
              </p>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {Object.entries(socialIcons).map(([platform, icon]) => (
                <a 
                  key={platform}
                  href={`https://www.${platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '1rem'
        }}>
          <p>© 2024 Pet Adoption. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
