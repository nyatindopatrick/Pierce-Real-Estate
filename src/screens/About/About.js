import React from 'react';
import { Card, Header, List, Service, ListItem } from '../../components/index';


export default function About() {
  return (
    <main>
      <Header>About Pierce Real Estate</Header>
      <Service
        section={
          <Card
            description={
              <List>
                <ListItem>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  nemo ea ex consequuntur illum asperiores omnis sit eaque
                  pariatur. Atque, exercitationem veritatis! Incidunt sit
                  asperiores commodi perspiciatis tenetur? Quisquam, cupiditate?
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  quibusdam suscipit ab et, iusto ipsam rerum libero dicta quae
                  tenetur?
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  quibusdam
                </ListItem>
              </List>
            }
            text={
              <>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  nemo ea ex consequuntur illum asperiores omnis sit eaque
                  pariatur. Atque, exercitationem veritatis! Incidunt sit
                  asperiores commodi perspiciatis tenetur? Quisquam, cupiditate?{' '}
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  nemo ea ex consequuntur illum asperiores omnis sit eaque
                  pariatur. Atque, exercitationem veritatis! Incidunt sit
                  asperiores commodi perspiciatis tenetur? Quisquam, cupiditate?{' '}
                </p>
              </>
            }
          />
        }
      />
    </main>
  );
}
