import React from "react";
import logoCyf from "../images/logo-cyf.png";
import logoCapgemini from "../images/logo-capgemini.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Dashboard created by:</p>
      <img className="cyf-logo" src={logoCyf} alt="CYF" />
      <p>...in partnership with </p>
      <img className="capgemini-logo" src={logoCapgemini} alt="CYF" />
    </div>
  );
};

export default Footer;
