/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

const navigate = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Sellers', path: '/#lnk-sellers' },
  { text: 'Advertising', path: '/' },
  { text: 'Insurance', path: '/' },
  { text: 'Buyers', path: '/' },
  { text: 'Contact', path: '/contact' },
];

const icons = [
  { icon: 'fa-facebook', link: '/' },
  { icon: 'fa-google', link: '/' },
  { icon: 'fa-linkedin', link: '/' },
];

export default function Footer() {
  return (
    <footer>
      <div className="left-footer">
        <h3>NAVIGATE</h3>
        <p />
        <ul>
          {navigate.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <p />
      </div>

      <div className="middle-footer">
        <h3>Pierce Real Estate</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          sequi eos pariatur molestias neque enim quae inventore nihil quo minus
          repellat distinctio architecto corporis, doloribus.
        </p>
        <p>Email: mike@piercerealestate.com.au </p>
        <p>Phone: +54 356 945234</p>
      </div>

      <div className="right-footer">
        <h3>STAY CONNECTED</h3>
        <div className="social-media-footer">
          <ul>
            {icons.map((item, idx) => (
              <li key={idx}>
                <Link to="/!#">
                  <i className={`fa ${item.icon}`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p>Copyright © Pierce Real Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
