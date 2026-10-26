import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './Interactive3DVisual.module.css';

export const Interactive3DVisual = ({
  src,
  alt = '3D Visual',
  width = 175,
  height = 175,
  className = '',
  maxTilt = 30,
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Real-time Physics Springs
  const currentRotX = useRef(0);
  const currentRotY = useRef(0);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  // Bonus Spin on Click (360° Barrel Flip)
  const currentSpin = useRef(0);
  const targetSpin = useRef(0);

  // 3D Depth Elevation (translateZ)
  const currentZ = useRef(0);
  const targetZ = useRef(0);

  // Drag offsets
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const currentDrag = useRef({ x: 0, y: 0 });

  const animFrameRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)',
  });

  // Track cursor position globally in section/window for magnetic awareness
  const handleGlobalMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;
    const distance = Math.hypot(diffX, diffY);

    // Magnetic zone of 650px radius around the image
    const maxRadius = 650;
    if (distance < maxRadius) {
      // Proximity intensity curve (1 when on top, gently fades to 0 at perimeter)
      const intensity = Math.pow(1 - distance / maxRadius, 0.7);
      
      const normX = Math.max(-1, Math.min(1, diffX / (rect.width * 1.4)));
      const normY = Math.max(-1, Math.min(1, diffY / (rect.height * 1.4)));

      targetRotY.current = normX * maxTilt * intensity;
      targetRotX.current = -normY * maxTilt * intensity;
      targetZ.current = 45 * intensity;
    } else {
      targetRotX.current = 0;
      targetRotY.current = 0;
      targetZ.current = 0;
    }

    if (isDragging) {
      dragOffset.current = {
        x: (e.clientX - dragStartPos.current.x) * 0.4,
        y: (e.clientY - dragStartPos.current.y) * 0.4,
      };
    }
  }, [isDragging, maxTilt]);

  useEffect(() => {
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [handleGlobalMouseMove]);

  // Click triggers an exhilarating 360° 3D Spin!
  const handleClick = () => {
    targetSpin.current += 360;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragOffset.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    let active = true;

    // Smooth spring linear interpolation
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const loop = () => {
      if (!active) return;

      // Spring interpolations
      currentRotX.current = lerp(currentRotX.current, targetRotX.current, 0.1);
      currentRotY.current = lerp(currentRotY.current, targetRotY.current, 0.1);
      currentSpin.current = lerp(currentSpin.current, targetSpin.current, 0.08);
      currentZ.current = lerp(currentZ.current, targetZ.current, 0.12);

      currentDrag.current.x = lerp(currentDrag.current.x, dragOffset.current.x, 0.15);
      currentDrag.current.y = lerp(currentDrag.current.y, dragOffset.current.y, 0.15);

      const totalRotY = currentRotY.current + currentSpin.current;
      const totalRotX = currentRotX.current;

      const scaleMultiplier = isDragging ? 0.94 : isHovered ? 1.08 : 1;

      setTransformStyle({
        transform: `perspective(1200px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) translate3d(${currentDrag.current.x.toFixed(1)}px, ${currentDrag.current.y.toFixed(1)}px, ${currentZ.current.toFixed(1)}px) scale(${scaleMultiplier})`,
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      active = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered, isDragging]);

  return (
    <div
      ref={containerRef}
      className={`${styles.visualWrapper} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
        dragOffset.current = { x: 0, y: 0 };
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      title="انقر لتشغيل دوران 360° ثلاثي الأبعاد أو حرّك الماوس للتفاعل"
      style={{
        width: `${Math.max(width, 180)}px`,
        height: `${Math.max(height, 180)}px`,
      }}
    >
      {/* 1. Multi-Harmonic Compound Wave Levitation */}
      <div className={`${styles.dynamicFloat} ${isHovered || isDragging ? styles.interactiveActive : ''}`}>
        {/* 2. Interactive 3D Spring Tilt & Spin Layer */}
        <div className={styles.tiltLayer} style={transformStyle}>
          {/* Pure clean image with zero backgrounds, plates, or shadows */}
          <img
            src={src}
            alt={alt}
            className={styles.image}
            style={{ width: `${width}px`, height: `${height}px` }}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Interactive3DVisual;
