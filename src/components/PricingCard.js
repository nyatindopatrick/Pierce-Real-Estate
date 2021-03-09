import React from 'react';

export const PriceCard = ({ children, header = null, icon = null }) => (
  <div className="pricing">
    <ul className="price">
      <li className="header">
        <span className={`fa ${icon}`} />
        {header}
      </li>
      {children}
    </ul>
  </div>
);

export const PriceItem = ({ children }) => <li>{children}</li>;

const PricingCard = { PriceCard, PriceItem };

export default PricingCard;
