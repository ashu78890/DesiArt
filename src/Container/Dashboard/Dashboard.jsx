// pages/index.jsx
import React from 'react';
import Layout from '../../Components/layout/Layout';
import DashboardCards from '../../Components/dashboard/DashboardCards';
import SalesChart from '../../Components/salechart/SalesChart';
import DealsDetailCard from '../../Components/dealdetail/DealsDetailCard';
import Products from '../products/products';

const Dashboard = () => {
  return (
    <Layout>
     <DashboardCards/>
     <SalesChart />
     <DealsDetailCard />
     {/* <Products/> */}
    </Layout>
  );
};

export default Dashboard;
