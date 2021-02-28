import React from 'react';
import {
  Card,
  PricingCard,
  Header,
  List,
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
                    <ul>
                      <li>Realestate </li>
                      <li>Domain </li>
                      <li>Pierce Real Estate </li>
                      <li>Gumtree </li>
                      <li>Facebook </li>
                      <li>Shareagent </li>
                    </ul>
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
          <PricingCard.FloatCard icon="fa-money" header="Pricing">
            <PricingCard.PriceItem>
              Print local messenger from ?
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Print statewide from ?
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Specialist colour print media magazines from ?
            </PricingCard.PriceItem>
          </PricingCard.FloatCard>
        }
      />
    </>
  );
}
