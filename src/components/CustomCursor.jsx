import React, { useEffect, useRef } from 'react';
import '../assets/css/cursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const update = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(update);
    };
    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(update);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper" ref={cursorRef}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="12,1 15,9 23,9 17,14 19,22 12,17 5,22 7,14 1,9 9,9"
          style={{ fill: 'var(--bg, #e6e1c9)', stroke: 'var(--text, #0f0f0f)', strokeWidth: '1.5', strokeLinejoin: 'round' }}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;