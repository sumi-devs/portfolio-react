import { useState } from 'react';

function Letter({ char }) {
  const [color, setColor] = useState('');

  const randomColor = () => {
    const colors = [
        "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf",
        "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff",
        "#fffffc", "#ffe066", "#ff70a6", "#ff9770",
        "#70d6ff"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClick = () => {
    setColor(color === '' ? randomColor() : '');
  };

  return (
    <div
      className="letter"
      onMouseEnter={handleClick}
      style={{ backgroundColor: color }}
    >
      {char}
    </div>
  );
}

export default Letter;
