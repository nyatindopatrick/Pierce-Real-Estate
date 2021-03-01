import React from 'react';

const ListItem = ({ children, subList, header }) => (
  <li>
    {header && <h3>{header}</h3>}
    <p>{children}</p>
    {subList}
  </li>
);
export default ListItem;
