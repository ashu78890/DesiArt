// components/DealsDetailCard.jsx
import React from 'react';
import './DetailCard.scss';

const deals = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/avatar1.png', // we can use placeholder or download later
    deal: 'Purchased 3 items',
    date: 'April 20, 2025',
    amount: '$120.00',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '/avatar2.png',
    deal: 'Purchased 1 item',
    date: 'April 19, 2025',
    amount: '$45.00',
  },
  {
    id: 3,
    name: 'David Johnson',
    avatar: '/avatar3.png',
    deal: 'Purchased 5 items',
    date: 'April 18, 2025',
    amount: '$250.00',
  },
];

const DealsDetailCard = () => {
  return (
    <div className="deals-detail-card">
      <h3>Deals Details</h3>
      <div className="deals-list">
        {deals.map((deal) => (
          <div className="deal" key={deal.id}>
            <div className="left">
              <img src={deal.avatar} alt={deal.name} />
              <div className="info">
                <h4>{deal.name}</h4>
                <p>{deal.deal}</p>
              </div>
            </div>
            <div className="right">
              <h5>{deal.amount}</h5>
              <span>{deal.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsDetailCard;
