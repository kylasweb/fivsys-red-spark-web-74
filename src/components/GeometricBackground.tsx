
import React, { useEffect, useState } from 'react';

const GeometricBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    angle: number;
  }>>([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.3,
      speed: 0.02 + Math.random() * 0.03,
      angle: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/5 via-transparent to-fivsys-burgundy/5 animate-pulse" />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-fivsys-red/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: `${8 + particle.id * 0.5}s`,
              boxShadow: `0 0 ${particle.size * 4}px rgba(223, 37, 49, 0.3)`,
            }}
          />
        ))}

        {/* Enhanced geometric lines with animations */}
        {Array.from({ length: 25 }).map((_, index) => {
          const randomAngle = Math.random() * 360;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomLength = 30 + Math.random() * 120;
          const colors = [
            'rgba(223, 37, 49, 0.3)',
            'rgba(169, 29, 38, 0.25)',
            'rgba(122, 20, 25, 0.2)',
          ];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={index}
              className="absolute h-[1px] origin-center transform animate-geometric-float"
              style={{
                background: `linear-gradient(90deg, transparent, ${randomColor}, transparent)`,
                width: `${randomLength}%`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                transform: `rotate(${randomAngle}deg)`,
                opacity: 0.1 + Math.random() * 0.4,
                boxShadow: `0 0 12px ${randomColor.replace('0.3', '0.6').replace('0.25', '0.5').replace('0.2', '0.4')}`,
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${12 + index * 0.2}s`,
              }}
            />
          );
        })}

        {/* Subtle moving shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-fivsys-red/5 to-transparent rounded-full blur-3xl animate-slow-drift" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-fivsys-burgundy/5 to-transparent rounded-full blur-3xl animate-slow-drift-reverse" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(223, 37, 49, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(223, 37, 49, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>
    </div>
  );
};

export default GeometricBackground;
