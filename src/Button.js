import React from 'react';

const Button = ({ text, onClick, disabled = false }) => {
  const styles = {
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: disabled ? '#cccccc' : '#007BFF',
      color: '#ffffff',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: '16px',
    },
    hover: {
      backgroundColor: '#0056b3',
    },
  };

  const handleMouseEnter = (e) => {
    if (!disabled) {
      e.target.style.backgroundColor = styles.hover.backgroundColor;
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      e.target.style.backgroundColor = styles.button.backgroundColor;
    }
  };

  return (
    <button
      style={styles.button}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
