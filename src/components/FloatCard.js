import React from 'react';

export const FloatCard = ({ children, header = null, icon=null }) => {
  return (
    <div className="pricing">
      <ul className="price">
        <li className="header">
          <span className={`fa ${icon}`}></span> {header}
        </li>
        {children}
      </ul>
    </div>
  );
};

export const FloatItem = ({ children }) => {
  return <li>{children}</li>;
};

const FloatingCard = { FloatCard, FloatItem };

export default FloatingCard;
