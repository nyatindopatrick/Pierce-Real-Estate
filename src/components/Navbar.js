/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contact' },
];

export default function Navbar() {
  const path = window.location.pathname;
  const [isActive, setActive] = useState(path);

  const navExpand = useRef();

  const addActive = page => setActive(page);

  const toggleMobileNav = () => {
    const slideoutMenut = navExpand.current;

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
      <div ref={navExpand} className="mobile-menu">
        <ul>
          {navLinks.map(({ name, link }, idx) => (
            <li key={idx}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <nav className="top-navigation">
        <div className="logo-img">
          <Link to="/">
            <span className="color-orange">Pierce </span>
            Real Estate
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMobileNav}>
          <i className="fa fa-bars" />
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
