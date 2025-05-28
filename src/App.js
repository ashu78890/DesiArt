import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TemplateList from "./Container/TemplateList";
import "./global.scss"; 
import ItemDrop from "./Container/dnd";
import AccountList from "./Container/accountList";
import PeopleAPI from "./Container/login";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Dashboard from "./Container/Dashboard/Dashboard";
import Products from "./Container/products/products";
import Layout from "./Components/layout/Layout";


function App() {
  return (
    <div>
    <Router>
    <div className="app">
      
      <main>
        <Routes>
          {/* <Route path="/" element={<Sidebar/>}/> */}
          {/* <Route path="/" element={ <Dashboard/>}/>
          <Route path="/products" element={ <Products/>}/> */}
            <Route path="/" element={<Dashboard  />}>
          {/* <Route index element={<Dashboard     />} /> */}
          <Route path="products" element={<Products />} />
          {/* Add more nested routes inside layout */}
        </Route>
         
          
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Navbar /> */}
        {/* <Route path="/" element={<AccountList/>}/> */}
        {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/" element={<PeopleAPI/>} /> */}
          {/* <Route path="/" element={<AccountList/>}/> */}
          {/* <Route path="/about" element={<ItemDrop/>}/> */}
          {/* <Route path="/log" element={<PeopleAPI/>}/> */}

        </Routes>
      </main>
    
    </div>
  </Router>
  </div>
  
  );
}

export default App;

 