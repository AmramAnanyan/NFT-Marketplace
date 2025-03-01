import React, { useEffect, useRef, useState } from 'react';
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  frequency: number;
  amplitude: number;
  color: string;
}

const StarWaveBackground = ({
  children,
  height = '100vh'
}: {
  children?: React.ReactNode;
  height?: string;
}) => {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const starId = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  const colors = ['#2596ff', '#ff9aff', '#6722d6', '#a259ff'];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create 3 new stars with different properties
      const newStars = Array.from({ length: 3 }, () => ({
        id: starId.current++,
        x,
        y,
        size: Math.random() * 3 + 2,
        opacity: 1,
        frequency: Math.random() * 0.03 + 0.02,
        amplitude: Math.random() * 60 + 30,
        color: getRandomColor()
      }));

      setStars((prev) => [...prev, ...newStars]);
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setStars((prev) => {
        const now = Date.now();
        return prev.filter((star) => {
          // Update star position with wave pattern
          star.y += 2 + star.size * 0.3;
          star.x += (Math.sin(star.y * star.frequency) * star.amplitude) / 100;
          star.opacity *= 0.96;

          // Keep stars within visible bounds
          return (
            star.opacity > 0.1 &&
            star.y < (container?.clientHeight || 0) + 100 &&
            star.x > -100 &&
            star.x < (container?.clientWidth || 0) + 100
          );
        });
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      animationFrameId.current &&
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      <svg
        width='100%'
        height='100%'
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <filter id='star-glow'>
            <feGaussianBlur stdDeviation='2' />
            <feComponentTransfer>
              <feFuncA type='linear' slope='1.5' />
            </feComponentTransfer>
          </filter>
        </defs>

        {stars.map((star: any) => (
          <circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.size / 2}
            fill={star.color}
            opacity={star.opacity}
            filter='url(#star-glow)'
          >
            <animate
              attributeName='r'
              values={`${star.size / 2};${star.size * 0.8};${star.size / 2}`}
              dur={`${Math.random() * 1 + 0.5}s`}
              repeatCount='indefinite'
            />
          </circle>
        ))}
      </svg>

      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default StarWaveBackground;
