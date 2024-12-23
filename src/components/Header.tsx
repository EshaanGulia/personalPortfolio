import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
        <h1 style={{ fontSize: '4rem', margin: '0' }}>Eshaan Gulia</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>
        Junior at the University of Texas at Dallas • Computer Science 
      </p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
