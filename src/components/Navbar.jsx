import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="logo-box">
          <Link to="/">S U<br />M I</Link>
        </div>
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <p id="menu-open" style={{ opacity: open ? 0 : 1 }}>ME<br />NU</p>
          <p id="menu-close" style={{ opacity: open ? 1 : 0 }}>✕</p>
        </div>
      </nav>

      <div className={`menu-overlay ${open ? 'open' : ''}`}>
        <div className="menu-content">
          <div className="menu-links">
            <div className="link"><Link to="/">{'> HOME'}</Link></div>
            <div className="link"><Link to="/academics">{'> ACADEMICS'}</Link></div>
            <div className="link"><Link to="/contact">{'> CONTACT'}</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;