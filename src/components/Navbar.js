import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const path = window.location.pathname;
  const [isActive, setActive] = useState(path);

  const addActive = (page) => setActive(page);
  useEffect(() => {
    const menuIcon = document.getElementById('menu-icon');
    const slideoutMenut = document.getElementById('slideout-menu');

    menuIcon.addEventListener('click', function () {
      if (slideoutMenut.style.opacity === '1') {
        slideoutMenut.style.opacity = '0';
        slideoutMenut.style.pointerEvents = 'none';
      } else {
        slideoutMenut.style.opacity = '1';
        slideoutMenut.style.pointerEvents = 'auto';
      }
    });
  }, []);

  return (
    <>
      <div id="slideout-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>

      <nav>
        <div id="logo-img">
          <Link to="/">
            <span className="color-orange">Pierce</span> Real Estate
          </Link>
        </div>
        <div id="menu-icon">
          <i className="fa fa-bars"></i>
        </div>
        <ul>
          <li>
            <Link
              onClick={() => addActive('/')}
              className={isActive === '/' ? 'active' : null}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => addActive('/about')}
              className={isActive === '/about' ? 'active' : null}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => addActive('/contact')}
              className={isActive === '/contact' ? 'active' : null}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
