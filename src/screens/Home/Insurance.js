import React from 'react';
import {
  Card, Header, List, Service, ListItem,
} from '../../components/index';
import img2 from '../../assets/img/2.jpg';

export default function Insurance() {
  return (
    <>
      <Header icon="fa-fire">Insurance</Header>
      <Service
        section={(
          <Card
            description={(
              <List>
                <ListItem>
                  Indemnity, liability, damage, theft, arson cover, etc.
                </ListItem>
                <ListItem>We advise and recommended applicable cover</ListItem>
              </List>
            )}
          />
        )}
        body={(
          <div className="card-img2">
            <img src={img2} alt="card" />
          </div>
        )}
      />
    </>
  );
}
