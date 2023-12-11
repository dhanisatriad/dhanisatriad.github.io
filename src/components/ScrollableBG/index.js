// ScrollablePage.jsx

import React, { useEffect, useRef } from 'react';
import './index.scss';

const ScrollablePage = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const updateBackgroundHeight = () => {
      const contentHeight = document.documentElement.scrollHeight;
      backgroundRef.current.style.height = `${contentHeight}px`;
    };

    // Update the background height initially and whenever the content changes
    updateBackgroundHeight();
    window.addEventListener('resize', updateBackgroundHeight);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateBackgroundHeight);
    };
  }, []);

  return (
    <div className="page-container">
      {/* Background div */}
      <div className="background" ref={backgroundRef}></div>

      {/* Page content */}
      <div className="page-content">
        <h1>Your Scrollable Page</h1>
        {/* Add your content here */}
        <p>Lorem ipsum dolor sit amet, consectetur asdasdasda.,sd m.as,dm.s,dms.,dfm s.,dfm.s,dm .s,dmf.s,dfm.s,dm.s,fdmf.,sdfma.werthkjalbnslidhuaisdjhaksjhdkjasgdhgaksjdghskh,mfad.adipiscing elit. ...</p>
        {/* Repeat content to make the page longer */}
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default ScrollablePage;
