import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/tvshows">Tv Shows</Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navigation;