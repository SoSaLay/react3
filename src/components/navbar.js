import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/counter">Counter App</Link>
      </li>
      <li>
        <Link to="/movies">Movie Search App</Link>
      </li>
      <li>
        <Link to="/todos">To-Do List App</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
