import React from 'react';
import {
  Card,
  PricingCard,
  Header,
  List,
  Service,
} from '../../components/index';

const { UnorderedList, ListItem } = List;

export default function Sellers() {
  return (
    <>
      <Header icon="fa-home">Sellers</Header>
      <Service
        section={
          <Card
            description={
              <UnorderedList>
                <ListItem>
                  Grab yourself a piece of the real estate pie down at the jetty
                  pier on the clean white sand in the black sun, toes in the
                  water, fingers on your device.
                </ListItem>
                <ListItem>
                  Earn $20000, $10000, $5000, $3000 Or even $1000 in commision
                  to work a property sale for you.
                </ListItem>
                <ListItem>
                  Pay absolutley nothing. 0% land agents commission, at
                  settlement, when you sell, then settle your property title.
                </ListItem>
                <ListItem>
                  Let your house and land sell itself to the highest offer. How?
                  Just look at the pricing
                </ListItem>
              </UnorderedList>
            }
          />
        }
        body={
          <PricingCard.FloatCard icon="fa-money" header="Pricing">
            <PricingCard.PriceItem>
              For sale signboard from $300
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Open inpection boards $100 each (includes site erection and
              delivery)
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Colour brochures from:
              <br /> $50 per 100 (one-sided) <br />
              $80 per 100 (two sided)
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Sketches floor plans from $200
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Digital still and moving; up and downloadable imaging from $100
              per hour
            </PricingCard.PriceItem>
          </PricingCard.FloatCard>
        }
      />
    </>
  );
}
