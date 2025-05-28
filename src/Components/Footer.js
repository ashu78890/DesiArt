import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} DesiArt. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
