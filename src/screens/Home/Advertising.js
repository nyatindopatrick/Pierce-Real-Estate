import React from 'react';
import {
  Card,
  PricingCard,
  Header,
  List,
  ListItem,
  Service,
} from '../../components/index';

const data = [
  { listItem: 'Print local messenger' },
  { listItem: 'Print statewide' },
  {
    listItem: 'Specialist colour print media magazines etc',
  },
  {
    listItem: 'Social media, internet websites:',
    subList: [
      'Realestate',
      'Domain',
      'Pierce Real Estate',
      'Gumtree',
      'Facebook',
      'Shareagent',
    ],
  },
  {
    listItem:
      'Or choose your own places, local community noticeboards,letterbox drops',
  },
];

export default function Advertising() {
  return (
    <>
      <Header icon="fa-clipboard">Advertising</Header>
      <Service
        section={
          <Card
            description={
              <List>
                {data.map(({ listItem, subList }, i) => (
                  <ListItem
                    key={i}
                    subList={
                      subList && (
                        <ul>
                          {subList &&
                            subList.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                        </ul>
                      )
                    }
                  >
                    {listItem}
                  </ListItem>
                ))}
              </List>
            }
          />
        }
        body={
          <PricingCard.PriceCard icon="fa-money" header="Pricing">
            <PricingCard.PriceItem>
              Print local messenger from ?
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Print statewide from ?
            </PricingCard.PriceItem>
            <PricingCard.PriceItem>
              Specialist colour print media magazines from ?
            </PricingCard.PriceItem>
          </PricingCard.PriceCard>
        }
      />
    </>
  );
}
