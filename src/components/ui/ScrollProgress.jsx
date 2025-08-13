import React, { useState, useEffect } from 'react';

const ScrollProgress = ({ 
  className = '',
  showPercentage = false,
  color = 'accent'
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    calculateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressBarColor = color === 'accent' ? 'bg-accent' : `bg-${color}`;

  return (
    <div className={`fixed top-16 left-0 right-0 z-90 ${className}`}>
      <div className="w-full h-1 bg-surface/50">
        <div 
          className={`h-full ${progressBarColor} transition-all duration-150 ease-out shadow-glow`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {showPercentage && (
        <div className="absolute top-2 right-4">
          <span className="text-xs font-mono text-muted-foreground bg-surface/80 px-2 py-1 rounded">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default ScrollProgress;