import React from 'react';

function UnorderedList({ children }) {
  return <ul>{children}</ul>;
}

const ListItem = ({ children, subList, header }) => (
  <li>
    {header && <h3>{header}</h3>}
    <p>{children}</p>
    {subList}
  </li>
);

const Lists = { UnorderedList, ListItem };

export default Lists;
