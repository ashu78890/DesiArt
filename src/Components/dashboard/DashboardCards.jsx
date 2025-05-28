// components/DashboardCards.jsx
import React from 'react';
import './DashboardCards.scss';
import { FaUsers, FaBoxOpen, FaDollarSign, FaChartLine } from 'react-icons/fa';

const cardData = [
  {
    title: 'Users',
    value: '12,345',
    icon: <FaUsers />,
    color: '#4a6cf7',
  },
  {
    title: 'Orders',
    value: '2,340',
    icon: <FaBoxOpen />,
    color: '#10b981',
  },
  {
    title: 'Revenue',
    value: '$56,789',
    icon: <FaDollarSign />,
    color: '#f59e0b',
  },
  {
    title: 'Sales',
    value: '9,876',
    icon: <FaChartLine />,
    color: '#ef4444',
  },
];

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon" style={{ backgroundColor: card.color }}>
            {card.icon}
          </div>
          <div className="details">
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
