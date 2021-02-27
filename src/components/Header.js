import React from 'react';

export default function Header({
  children = null,
  color = 'color-orange',
  icon = null,
}) {
  return (
    <h2 className="page-heading">
      <span className={`fa ${icon} ${color}`}></span>{" "}
      {children}
    </h2>
  );
}
