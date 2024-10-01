// src/Topbar.js
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      {/* <div className="logo">On Racha</div> */}
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
