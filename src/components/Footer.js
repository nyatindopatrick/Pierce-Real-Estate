import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="left-footer">
        <h3>NAVIGATE</h3>
        <p></p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/#lnk-sellers">Sellers</a>
          </li>
          <li>
            <Link to="/!#">Advertising</Link>
          </li>
          <li>
            <Link to="/!#">Insurance</Link>
          </li>
          <li>
            <Link to="/!#">Buyers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p></p>
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
        <div id="social-media-footer">
          <ul>
            <li>
              <Link to="/!#">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="/!#">
                <i className="fa fa-google"></i>
              </Link>
            </li>
            <li>
              <Link to="/!#">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
        <p>Copyright © Pierce Real Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
