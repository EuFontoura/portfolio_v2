import { useRef, useCallback } from "react";

interface PictureEffectProps {
  src: string;
  alt: string;
  className?: string;
}

const PictureEffect = ({ src, alt, className = "" }: PictureEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    el.style.boxShadow = `${rotateY * 2}px ${rotateX * 2}px 20px rgba(0,0,0,0.3)`;
  }, []);

  const resetTransform = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.boxShadow = "none";
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden transition-transform duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      style={{ willChange: "transform", transition: "transform 0.3s ease" }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default PictureEffect;
