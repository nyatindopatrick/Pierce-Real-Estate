import React from 'react';

export default function Card({ children, description, text }) {
  return description ? (
    <div className="card">
      {text}
      <div className="card-description">
        <div className="card-description">{description}</div>
      </div>
    </div>
  ) : (
    <div className="card">{children}</div>
  );
}
