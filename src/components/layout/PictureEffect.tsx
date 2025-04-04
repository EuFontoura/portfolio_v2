import React, { useState } from 'react';

const PictureEffect = ({ src }: { src: string }) => {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      boxShadow: `${rotateY * 2}px ${rotateX * 2}px 20px rgba(0,0,0,0.3)`,
    });
  };

  const resetTransform = () => {
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  };

  return (
    <div
      className="w-72 h-72 rounded-full overflow-hidden transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      style={{
        ...transformStyle,
        willChange: 'transform',
        transition: 'transform 0.3s ease',
      }}
    >
      <img
        src={src}
        alt="foto do brabo"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default PictureEffect;
