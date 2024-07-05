import React, { useState, useEffect } from 'react';
// import './BackToTopButton.css'; // Create this CSS file for styling

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scroll > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button className="back-to-top bg-red-700" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default BackToTopButton;