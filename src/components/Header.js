import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>My Hobby Hub</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;