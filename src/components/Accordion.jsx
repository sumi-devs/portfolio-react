import { useState } from 'react';

function Accordion({ title, children, link }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {link ? (
          <div className="accordion-link"><a href={link} target="_blank" rel="noopener noreferrer">↗</a></div>
        ) : (
          <button className="accordion-toggle">{open ? '-' : '+'}</button>
        )}
      </div>
      {children && (
        <div className="accordion-content" style={{ height: open ? 'auto' : '0' }}>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
