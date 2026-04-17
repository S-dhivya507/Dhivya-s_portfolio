import { useState, useEffect } from 'react';
import profileImg from './img_profile.jpeg';

export default function Navbar({ onOpenAdmin }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar jevelin-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid padding-nav">
          <div className="nav-content jevelin-nav-content">
            
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={profileImg} alt="Profile" className="navbar-avatar" />
              <div className="logo">
                <h1>Dhivya Shanmugavel</h1>
              </div>
            </div>

            <div className="desktop-nav">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="nav-socials mobile-hidden">
              <a href="https://github.com/S-dhivya507" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://in.linkedin.com/in/dhivya07" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <button 
                onClick={onOpenAdmin} 
                style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', marginLeft: '10px', fontSize: '1.2rem' }}
                title="Admin Dashboard (Ctrl+Shift+A)"
              >
                <i className="fas fa-lock"></i>
              </button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Hidden Fullscreen menu */}
      <div className={`full-menu ${menuOpen ? 'active' : ''}`} id="fullMenu">
        <div className="close-menu" onClick={toggleMenu}><i className="fas fa-times"></i></div>
        <ul className="nav-links-new">
          <li><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
          <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}
