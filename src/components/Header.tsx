import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#submit">Submit</a>
        <a href="#support">Support</a>
      </nav>
    </header>
  );
};

export default Header;
