
import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black">
        {/* Generate multiple lines with updated red color variations */}
        {Array.from({ length: 30 }).map((_, index) => {
          const randomAngle = Math.random() * 360;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomLength = 50 + Math.random() * 150;
          const colors = [
            'rgba(223, 37, 49, 0.4)', // fivsys-red
            'rgba(169, 29, 38, 0.4)', // fivsys-darkRed
            'rgba(122, 20, 25, 0.4)', // fivsys-burgundy
          ];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={index}
              className="absolute h-[1px] origin-center transform transition-opacity duration-1000"
              style={{
                background: `linear-gradient(90deg, transparent, ${randomColor}, transparent)`,
                width: `${randomLength}%`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                transform: `rotate(${randomAngle}deg)`,
                opacity: 0.1 + Math.random() * 0.3,
                boxShadow: `0 0 8px ${randomColor.replace('0.4', '0.6')}`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeometricBackground;
