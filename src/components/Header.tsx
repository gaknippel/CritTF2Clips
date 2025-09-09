import React from 'react';
import './Header.css';
import ShinyText from './ShinyText';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#submit">Submit</a>
        <a href="#support">Support</a>
      </nav>
    </header>
  );
};

export default Header;
