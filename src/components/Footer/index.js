import React from 'react';
import './style.css'

/**
  * @author
  * @function Footer
  **/

const Footer = (props) => {
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >

        <div className="footerMenus mtb-10">
          <nav>
            <a href="0">Home</a>
            <a href="0">About</a>
            <a href="0">Portfolio</a>
            <a href="0">Blog</a>
            <a href="0">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
};


export default Footer;
