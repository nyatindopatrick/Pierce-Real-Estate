import React from 'react';
import {
  Card,
  FloatingCard,
  Header,
  List,
  SubList,
  Service,
} from '../../components/index';

const { UnorderedList, ListItem } = List;

export default function Advertising() {
  return (
    <>
      <Header icon="fa-clipboard">Advertising</Header>
      <Service
        section={
          <Card
            description={
              <UnorderedList>
                <ListItem>Print local messenger</ListItem>
                <ListItem>Print statewide</ListItem>
                <ListItem>Specialist colour print media magazines etc</ListItem>
                <ListItem
                  subList={
                    <SubList>
                      <li>Realestate </li>
                      <li>Domain </li>
                      <li>Pierce Real Estate </li>
                      <li>Gumtree </li>
                      <li>Facebook </li>
                      <li>Shareagent </li>
                    </SubList>
                  }
                >
                  Social media, internet websites:
                </ListItem>
                <ListItem>
                  Or choose your own places, local community noticeboards,
                  letterbox drops
                </ListItem>
              </UnorderedList>
            }
          />
        }
        body={
          <FloatingCard.FloatCard icon="fa-money" header="Pricing">
            <FloatingCard.FloatItem>
              Print local messenger from ?
            </FloatingCard.FloatItem>
            <FloatingCard.FloatItem>
              Print statewide from ?
            </FloatingCard.FloatItem>
            <FloatingCard.FloatItem>
              Specialist colour print media magazines from ?
            </FloatingCard.FloatItem>
          </FloatingCard.FloatCard>
        }
      />
    </>
  );
}
