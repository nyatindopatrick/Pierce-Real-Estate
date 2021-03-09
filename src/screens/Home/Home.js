import React from 'react';
import Advertising from './Advertising';
import Buyers from './Buyers';
import Insurance from './Insurance';
import Sellers from './Sellers';

export default function Home() {
  return (
    <>
      <div className="banner">
        <h1>
          Welcome to
          <span> Pierce </span>
          Real Estate
        </h1>
      </div>
      <main>
        <Sellers />
        <Insurance />
        <Advertising />
        <Buyers />
      </main>
    </>
  );
}
