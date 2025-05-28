// components/Topbar.jsx
import React from 'react';
import './Topbar.scss';
import { FaBell } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="actions">
        <div className="icon-badge">
          <FaBell />
          <span className="badge">1</span>
        </div>

        <div className="language">
          <img src="/uk-flag.png" alt="English" />
          <span>English</span>
          <MdKeyboardArrowDown />
        </div>

        <div className="profile">
          <img src="/user.png" alt="User" />
          <div className="details">
            <h4>Moni Roy</h4>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
