import React from 'react';

export default function Service({ body, section }) {
  return (
    <div id="service">
      <section id="service-desc">{section}</section>
      {body}
    </div>
  );
}
