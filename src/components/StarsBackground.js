import { useRef, useEffect } from 'react';

const generateStars = () => Array.from({ length: 50 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 3,
  duration: Math.random() * 2 + 2
}));

function StarsBackground() {
  const starsRef = useRef(generateStars());

  return (
    <div className="absolute inset-0">
      {starsRef.current.map((star, i) => (
        <div 
          key={i} 
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
