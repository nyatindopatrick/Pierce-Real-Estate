import React from 'react';

export default function Service({ body, section }) {
  return (
    <div className="service">
      <section className="service-desc">{section}</section>
      {body}
    </div>
  );
}
