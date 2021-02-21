import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item"> 
        <Link className="nav-link" to="/about">About</Link>  
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/displaytvshows">Tv Shows</Link>
        </li>
      </ul>
  );
}
 
export default Navigation;