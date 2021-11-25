import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/login">Login</Link>
      <Link
        to={{
          pathname: '/registration',
          search: '?sort=date',
        }}
      >
        Registration
      </Link>
    </nav>
  );
};

export default Header;
