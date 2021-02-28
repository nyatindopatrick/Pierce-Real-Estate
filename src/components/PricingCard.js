import React from 'react';

export const PriceCard = ({ children, header = null, icon=null }) => {
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

export const PriceItem = ({ children }) => {
  return <li>{children}</li>;
};

const PricingCard = { PriceCard, PriceItem };

export default PricingCard;
