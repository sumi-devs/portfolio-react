import { useRef } from 'react';

function Carousel({ images }) {
  const trackRef = useRef(null);

  const next = () => {
    const track = trackRef.current;
    track.appendChild(track.firstElementChild);
  };

  const prev = () => {
    const track = trackRef.current;
    track.prepend(track.lastElementChild);
  };

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="carousel-slide" />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prev}>‹</button>
      <button className="carousel-button next" onClick={next}>›</button>
    </div>
  );
}

export default Carousel;
