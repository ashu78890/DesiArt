// components/Layout.jsx
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="page-content">
          {children}
          {/* <Outlet/> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
