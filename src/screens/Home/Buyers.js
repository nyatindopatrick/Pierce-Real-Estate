import React from 'react';
import { Card, Header, List, Service, ListItem } from '../../components/index';

const buyers = [
  'Become a smart "dinky" (double incomes, no kids yet) buyer with Pierce Real Estate.',
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, aliquam!',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, quos.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, libero?',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, quos.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, libero?',
];

export default function Buyers() {
  return (
    <>
      <Header icon="fa-dollar">Buyers</Header>
      <Service
        section={
          <Card
            description={
              <List>
                {buyers.map((item, idx) => (
                  <ListItem key={idx}>{item}</ListItem>
                ))}
              </List>
            }
          />
        }
      />
    </>
  );
}
