// ShootingStar.jsx
import './starAnimation.scss'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';

const ShootingStar = () => {
  const starsRef = useRef([]);

  useEffect(() => {
    starsRef.current.forEach((star, index) => {
      animateStar(star, index * 0.5);
    });
  }, []);

  const animateStar = (star, delay) => {
    gsap.to(star, {
      x: '100vw',
      y: '100vh',
      rotation: 360,
      duration: 2,
      ease: 'power1.inOut',
      delay,
      opacity: 0,
      onComplete: () => {
        gsap.set(star, { x: '-10%', y: '-10%', rotation: 0, opacity: 1 });
        animateStar(star, 0);
      },
    });
  };

  const numStars = 20;
  const starSize = 3;

  return (
    <div className='starContainer'>
      {Array.from({ length: numStars }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (starsRef.current[index] = el)}
          style={{
            position: 'absolute',
            width: `${starSize}px`, // Adjust the size based on viewport dimensions
            height: `${starSize}px`, // Adjust the size based on viewport dimensions
            background: 'white',
            borderRadius: '50%',
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStar;
