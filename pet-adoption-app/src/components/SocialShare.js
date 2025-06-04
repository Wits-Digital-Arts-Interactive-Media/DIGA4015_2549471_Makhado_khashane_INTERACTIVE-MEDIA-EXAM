import React from 'react';

const SocialButton = ({ icon, color, onClick }) => (
  <button
    style={{
      backgroundColor: color,
      color: 'white',
      border: 'none',
      width: 'clamp(2.5rem, 5vw, 3rem)',
      height: 'clamp(2.5rem, 5vw, 3rem)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      transition: 'all 0.3s ease',
      boxShadow: `0 2px 8px ${color}4D`
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = `0 4px 12px ${color}66`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = `0 2px 8px ${color}4D`;
    }}
    onClick={onClick}
  >
    <i className={`fab fa-${icon}`}></i>
  </button>
);

const SocialShare = () => {
  const shareUrl = window.location.href;
  const title = "The Dark Side of UX: How Infinite Scroll Manipulates User Behavior";

  const share = (platform) => {
    let url;
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div style={{
      position: 'fixed',
      left: 'clamp(0.5rem, 2vw, 2rem)',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 10
    }}>
      <SocialButton
        icon="twitter"
        color="#1da1f2"
        onClick={() => share('twitter')}
      />
      <SocialButton
        icon="facebook-f"
        color="#4267B2"
        onClick={() => share('facebook')}
      />
      <SocialButton
        icon="linkedin-in"
        color="#0077b5"
        onClick={() => share('linkedin')}
      />
    </div>
  );
};

export default SocialShare;
