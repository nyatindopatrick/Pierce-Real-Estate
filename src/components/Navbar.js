import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contact' },
];

export default function Navbar() {
  const path = window.location.pathname;
  const [isActive, setActive] = useState(path);

  const addActive = (page) => setActive(page);

  const toggleMobileNav = () => {
    const slideoutMenut = document.getElementById('slideout-menu');

    if (slideoutMenut.style.opacity === '1') {
      slideoutMenut.style.opacity = '0';
      slideoutMenut.style.pointerEvents = 'none';
    } else {
      slideoutMenut.style.opacity = '1';
      slideoutMenut.style.pointerEvents = 'auto';
    }
  };

  return (
    <>
      <div id="slideout-menu">
        <ul>
          {navLinks.map(({ name, link }, idx) => (
            <li key={idx}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <nav>
        <div id="logo-img">
          <Link to="/">
            <span className="color-orange">Pierce</span> Real Estate
          </Link>
        </div>
        <div id="menu-icon" onClick={toggleMobileNav}>
          <i className="fa fa-bars"></i>
        </div>
        <ul>
          {navLinks.map(({ name, link }, idx) => (
            <li key={idx}>
              <Link
                onClick={() => addActive(link)}
                className={isActive === link ? 'active' : null}
                to={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
