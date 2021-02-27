import React from 'react';
import { Card, Header, List, Service } from '../../components/index';

const { UnorderedList, ListItem } = List;

export default function Contacts() {
  return (
    <main>
      <Header>Get in touch</Header>
      <Service
        section={
          <Card
            description={
              <UnorderedList>
                <ListItem header="LOCATION ">
                  Lorem ipsum dolor sit amet consectetur
                </ListItem>
                <ListItem header="OPEN HOURS">
                  Lorem ipsum dolor sit amet consectetur
                </ListItem>
                <ListItem header="CONTACT US">
                  Email: mike@piercerealestate.com.au
                  <br />
                  Phone: +54 356 945234
                </ListItem>
              </UnorderedList>
            }
          />
        }
        body={
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2003566217318!2d138.60111191465637!3d-34.92651178037714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced737c1c41f%3A0x5e06ca1f1bf55415!2s80%20Flinders%20St%2C%20Adelaide%20SA%205000!5e0!3m2!1ses-419!2sau!4v1597590461884!5m2!1ses-419!2sau"
              width="600"
              title="map"
              height="450"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        }
      />
    </main>
  );
}
