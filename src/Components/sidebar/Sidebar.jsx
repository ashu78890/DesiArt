// components/Sidebar.jsx
import React from "react";
import "./Sidebar.scss";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaHeart,
  FaInbox,
  FaListUl,
  FaLayerGroup,
  FaTags,
  FaCalendarAlt,
  FaClipboardList,
  FaPhoneAlt,
  FaFileInvoice,
  FaPuzzlePiece,
  FaUsers,
  FaTable,
  FaCog,
  FaSignOutAlt,
  FaHome, FaBox,FaShoppingCart
} from "react-icons/fa";
import { Link ,useLocation} from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
    const navItems = [
        { name: 'Dashboard', icon: <FaHome />, path: '/' },
        // { name: 'Order Lists', icon: <FaShoppingCart />, path: '/orders' },
        { name: 'Products', icon: <FaBox />, path: '/products' },
        // { name: 'Customers', icon: <FaUsers />, path: '/customers' },
      ];

  return (
    <aside className="sidebar">
      <div className="logo">Desi<span>Art</span></div>
      
      <nav className="nav-section">
        <ul>
        {/* {navItems.map((item) => (
            <li
              key={item.path}
              className={router.pathname === item.path ? 'active' : ''}
            >
              <Link href={item.path}>
                <span>{item.icon}</span >
                {item.name}
              </Link>
            </li>
          ))} */}

          <li className="active"><FaTachometerAlt /> Dashboard</li>
          <li><FaBoxOpen /> Products</li>
          <li><FaHeart /> Favorites</li>
          <li><FaInbox /> Inbox</li>
          <li><FaListUl /> Order Lists</li>
          <li><FaLayerGroup /> Product Stock</li>
        </ul>
      </nav>

      <div className="section-label">PAGES</div>
      <nav className="nav-section">
        <ul>
          <li><FaTags /> Pricing</li>
          <li><FaCalendarAlt /> Calender</li>
          <li><FaClipboardList /> To-Do</li>
          <li><FaPhoneAlt /> Contact</li>
          <li><FaFileInvoice /> Invoice</li>
          <li><FaPuzzlePiece /> UI Elements</li>
          <li><FaUsers /> Team</li>
          <li><FaTable /> Table</li>
        </ul>
      </nav>

      <div className="bottom-actions">
        <ul>
          <li><FaCog /> Settings</li>
          <li><FaSignOutAlt /> Logout</li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;


// import React from "react";
// import "./Sidebar.scss";
// import {
//   FaTachometerAlt,
//   FaBoxOpen,
//   FaHeart,
//   FaInbox,
//   FaListUl,
//   FaLayerGroup,
//   FaTags,
//   FaCalendarAlt,
//   FaClipboardList,
//   FaPhoneAlt,
//   FaFileInvoice,
//   FaPuzzlePiece,
//   FaUsers,
//   FaTable,
//   FaCog,
//   FaSignOutAlt,
//   FaHome,
//   FaBox,
//   FaShoppingCart,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();

//   const navItems = [
//     { name: 'Dashboard', icon: <FaHome />, path: '/' },
//     { name: 'Products', icon: <FaBox />, path: '/products' },
//     // Add more main nav items here if needed
//   ];

//   const pageItems = [
//     { name: 'Favorites', icon: <FaHeart /> },
//     { name: 'Inbox', icon: <FaInbox /> },
//     { name: 'Order Lists', icon: <FaListUl /> },
//     { name: 'Product Stock', icon: <FaLayerGroup /> },
//     { name: 'Pricing', icon: <FaTags /> },
//     { name: 'Calendar', icon: <FaCalendarAlt /> },
//     { name: 'To-Do', icon: <FaClipboardList /> },
//     { name: 'Contact', icon: <FaPhoneAlt /> },
//     { name: 'Invoice', icon: <FaFileInvoice /> },
//     { name: 'UI Elements', icon: <FaPuzzlePiece /> },
//     { name: 'Team', icon: <FaUsers /> },
//     { name: 'Table', icon: <FaTable /> },
//   ];

//   const bottomItems = [
//     { name: 'Settings', icon: <FaCog /> },
//     { name: 'Logout', icon: <FaSignOutAlt /> },
//   ];

//   return (
//     <aside className="sidebar">
//       <div className="logo">
//         Desi<span>Art</span>
//       </div>

//       <nav className="nav-section">
//         <ul>
//           {navItems.map((item) => (
//             <li
//               key={item.path}
//               className={location.pathname === item.path ? 'active' : ''}
//             >
//               <Link to={item.path}>
//                 <span className="icon">{item.icon}</span>
//                 <span className="text">{item.name}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="section-label">PAGES</div>
//       <nav className="nav-section">
//         <ul>
//           {pageItems.map((item, index) => (
//             <li key={index}>
//               <span className="icon">{item.icon}</span>
//               <span className="text">{item.name}</span>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="bottom-actions">
//         <ul>
//           {bottomItems.map((item, index) => (
//             <li key={index}>
//               <span className="icon">{item.icon}</span>
//               <span className="text">{item.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

