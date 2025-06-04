import React from 'react';

const EssaySection = ({ title, content, level = 2 }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <section style={{ marginBottom: '3rem' }}>
      <HeadingTag style={{
        fontSize: level === 2 ? 'clamp(1.5rem, 3vw, 2rem)' : 'clamp(1.25rem, 2.5vw, 1.75rem)',
        color: '#4b47d6',
        marginBottom: '1.5rem'
      }}>
        {title}
      </HeadingTag>
      {Array.isArray(content) ? (
        content.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: '#2d3436',
              lineHeight: '1.8',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              marginBottom: index < content.length - 1 ? '1.5rem' : 0
            }}
          >
            {paragraph}
          </p>
        ))
      ) : (
        <p style={{
          color: '#2d3436',
          lineHeight: '1.8',
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          marginBottom: '1.5rem'
        }}>
          {content}
        </p>
      )}
    </section>
  );
};

export const EssayBox = ({ title, items }) => {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem'
    }}>
      <h4 style={{
        color: '#4b47d6',
        marginBottom: '1rem',
        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)'
      }}>
        {title}
      </h4>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: index < items.length - 1 ? '1rem' : 0 }}>
            <strong style={{ color: '#4b47d6' }}>{item.title}:</strong>
            <p style={{ marginTop: '0.5rem', color: '#2d3436' }}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Bibliography = ({ entries }) => {
  return (
    <section>
      <h2 style={{
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        color: '#4b47d6',
        marginBottom: '1.5rem'
      }}>
        Bibliography
      </h2>
      <div style={{
        color: '#2d3436',
        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        lineHeight: '1.8'
      }}>
        {entries.map((entry, index) => (
          <p key={index} style={{ marginBottom: index < entries.length - 1 ? '1rem' : 0 }}>
            {entry}
          </p>
        ))}
      </div>
    </section>
  );
};

export default EssaySection;
