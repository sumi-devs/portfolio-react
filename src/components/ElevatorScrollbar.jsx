import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/elevator.css';

const ElevatorScrollbar = () => {
  const [carTop, setCarTop] = useState(0);
  const [currentFloor, setCurrentFloor] = useState('1');
  const [isDragging, setIsDragging] = useState(false);
  const location = useLocation();
  
  const shaftRef = useRef(null);
  const carRef = useRef(null);
  const dragStartY = useRef(0);
  const dragStartTop = useRef(0);

  useEffect(() => {
    const updateFloors = () => {
      const sections = Array.from(document.querySelectorAll('section[data-floor]'));
      if (!sections.length) return;

      const shaft = shaftRef.current;
      const car = carRef.current;
      if (!shaft || !car) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const frac = maxScroll > 0 ? Math.min(1, scrollPos / maxScroll) : 0;
      
      if (!isDragging) {
        const travel = shaft.clientHeight - car.offsetHeight;
        setCarTop(Math.round(frac * travel));
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const isNearBottom = scrollPos + clientHeight >= scrollHeight - 120;

      if (isNearBottom && sections.length > 0) {
        setCurrentFloor(sections[sections.length - 1].dataset.floor);
        return;
      }

      const detectionLine = 0.35 * window.innerHeight;
      
      let bestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= detectionLine && rect.bottom >= detectionLine) {
          bestSection = section;
          minDistance = 0;
        } else {
          const dist = Math.abs(rect.top - detectionLine);
          if (dist < minDistance) {
            minDistance = dist;
            bestSection = section;
          }
        }
      });

      if (bestSection && bestSection.dataset.floor) {
        setCurrentFloor(bestSection.dataset.floor);
      }
    };

    window.addEventListener('scroll', updateFloors, { passive: true });
    window.addEventListener('resize', updateFloors);
    
    updateFloors();
    const interval = setInterval(updateFloors, 300);

    return () => {
      window.removeEventListener('scroll', updateFloors);
      window.removeEventListener('resize', updateFloors);
      clearInterval(interval);
    };
  }, [location.pathname, isDragging]);

  const setScrollFromCarTop = (top) => {
    const shaft = shaftRef.current;
    const car = carRef.current;
    if (!shaft || !car) return;

    const travel = shaft.clientHeight - car.offsetHeight;
    const frac = Math.max(0, Math.min(1, top / travel));
    const targetScroll = frac * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo(0, targetScroll);
  };

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
    
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragStartY.current = clientY;
    dragStartTop.current = carTop;

    const onMove = (ev) => {
      const currentY = ev.touches ? ev.touches[0].clientY : ev.clientY;
      const shaft = shaftRef.current;
      const car = carRef.current;
      if (!shaft || !car) return;

      const travel = shaft.clientHeight - car.offsetHeight;
      const delta = currentY - dragStartY.current;
      const clamped = Math.max(0, Math.min(travel, dragStartTop.current + delta));
      
      setCarTop(clamped);
      setScrollFromCarTop(clamped);
    };

    const onUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  };

  const handleShaftClick = (e) => {
    if (carRef.current && carRef.current.contains(e.target)) return;
    
    const shaft = shaftRef.current;
    const car = carRef.current;
    if (!shaft || !car) return;

    const rect = shaft.getBoundingClientRect();
    const travel = shaft.clientHeight - car.offsetHeight;
    const clickedTop = e.clientY - rect.top - car.offsetHeight / 2;
    const clamped = Math.max(0, Math.min(travel, clickedTop));
    
    setCarTop(clamped);
    setScrollFromCarTop(clamped);
  };

  return (
    <div id="elv-shaft" ref={shaftRef} onClick={handleShaftClick}>
      <div id="elv-cable-t" style={{ top: 0, height: `${carTop}px` }}></div>
      <div 
        id="elv-car" 
        ref={carRef}
        className={isDragging ? 'dragging' : ''}
        style={{ top: `${carTop}px` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div id="elv-display">{currentFloor}</div>
        <div className="elv-doors">
          <div className="elv-door"></div>
          <div className="elv-door"></div>
        </div>
      </div>
      <div 
        id="elv-cable-b" 
        style={{ 
          top: `${carTop + (carRef.current?.offsetHeight || 0)}px`, 
          height: `${Math.max(0, (shaftRef.current?.clientHeight || 0) - carTop - (carRef.current?.offsetHeight || 0))}px` 
        }}
      ></div>
    </div>
  );
};

export default ElevatorScrollbar;
