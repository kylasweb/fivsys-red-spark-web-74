
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

  const [aiNodes, setAiNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    connections: number[];
  }>>([]);

  useEffect(() => {
    // Generate enhanced particles with AI energy feel
    const newParticles = Array.from({ length: 35 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 4,
      opacity: 0.1 + Math.random() * 0.5,
      speed: 0.01 + Math.random() * 0.04,
      angle: Math.random() * 360,
    }));
    setParticles(newParticles);

    // Generate AI network nodes
    const newNodes = Array.from({ length: 12 }).map((_, index) => ({
      id: index,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
        Math.floor(Math.random() * 12)
      ).filter(conn => conn !== index),
    }));
    setAiNodes(newNodes);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black">
        {/* Dynamic AI energy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/10 via-transparent via-fivsys-red/5 to-fivsys-burgundy/15 animate-pulse" 
             style={{ animationDuration: '4s' }} />
        
        {/* Enhanced floating particles with AI energy */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(223, 37, 49, ${particle.opacity}) 0%, rgba(223, 37, 49, 0) 70%)`,
              boxShadow: `0 0 ${particle.size * 8}px rgba(223, 37, 49, ${particle.opacity * 0.8})`,
              animationDelay: `${particle.id * 0.3}s`,
              animationDuration: `${6 + particle.id * 0.4}s`,
            }}
          />
        ))}

        {/* AI Network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {aiNodes.map((node) => 
            node.connections.map((connId) => {
              const targetNode = aiNodes[connId];
              if (!targetNode) return null;
              return (
                <line
                  key={`${node.id}-${connId}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke="rgba(223, 37, 49, 0.3)"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{
                    filter: 'drop-shadow(0 0 2px rgba(223, 37, 49, 0.5))',
                    animationDelay: `${node.id * 0.5}s`,
                    animationDuration: '3s'
                  }}
                />
              );
            })
          )}
          {aiNodes.map((node) => (
            <circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="rgba(223, 37, 49, 0.6)"
              className="animate-gentle-glow"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(223, 37, 49, 0.8))',
                animationDelay: `${node.id * 0.2}s`
              }}
            />
          ))}
        </svg>

        {/* Enhanced geometric lines with AI energy */}
        {Array.from({ length: 40 }).map((_, index) => {
          const randomAngle = Math.random() * 360;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomLength = 20 + Math.random() * 160;
          const intensity = Math.random();
          const redIntensity = 0.2 + intensity * 0.5;
          
          return (
            <div
              key={index}
              className="absolute h-[1px] origin-center transform animate-geometric-float"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(223, 37, 49, ${redIntensity}), rgba(255, 255, 255, ${intensity * 0.3}), rgba(223, 37, 49, ${redIntensity}), transparent)`,
                width: `${randomLength}%`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                transform: `rotate(${randomAngle}deg)`,
                boxShadow: `0 0 ${8 + intensity * 12}px rgba(223, 37, 49, ${redIntensity})`,
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${10 + index * 0.15}s`,
              }}
            />
          );
        })}

        {/* Dynamic energy orbs */}
        <div className="absolute top-1/5 left-1/6 w-[500px] h-[500px] bg-gradient-radial from-fivsys-red/15 via-fivsys-red/5 to-transparent rounded-full blur-3xl animate-slow-drift opacity-60" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-gradient-radial from-fivsys-burgundy/20 via-fivsys-red/8 to-transparent rounded-full blur-3xl animate-slow-drift-reverse opacity-70" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-radial from-white/5 via-fivsys-red/10 to-transparent rounded-full blur-2xl animate-float opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Enhanced grid pattern with AI theme */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(rgba(223, 37, 49, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(223, 37, 49, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(223, 37, 49, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 30px 30px, 45px 45px',
            animation: 'grid-move 25s linear infinite',
          }}
        />

        {/* AI data streams */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`stream-${index}`}
            className="absolute w-1 opacity-30"
            style={{
              height: '200px',
              left: `${10 + index * 12}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(180deg, transparent, rgba(223, 37, 49, 0.6), transparent)`,
              animation: `slideInFromBottom ${3 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${index * 0.8}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px rgba(223, 37, 49, 0.4)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GeometricBackground;
