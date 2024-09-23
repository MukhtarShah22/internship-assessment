import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>My E-commerce Store</Link></h1>
    </header>
  );
}

export default Header;