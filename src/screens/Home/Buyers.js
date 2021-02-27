import React from 'react';
import { Card, Header, List, Service } from '../../components/index';

const { UnorderedList, ListItem } = List;

export default function Buyers() {
  return (
    <>
      <Header icon="fa-dollar">Buyers</Header>
      <Service
        section={
          <Card
            description={
              <UnorderedList>
                <ListItem>
                  Become a smart "dinky" (double incomes, no kids yet) buyer
                  with Pierce Real Estate.
                </ListItem>
                <ListItem>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sint, aliquam!
                </ListItem>
                <ListItem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus, quos.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias, libero?
                </ListItem>
                <ListItem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus, quos.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias, libero?
                </ListItem>
              </UnorderedList>
            }
          />
        }
      />
    </>
  );
}
