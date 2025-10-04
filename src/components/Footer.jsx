import React from "react";
import '../styles/footer.css';
 // move styles here

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Blood Donation Camp</div>

      <div className="footer-links">
        <a href="../Homemain">Home</a>
        <a href="../aboutus">About</a>
        <a href="#">Services</a>
        <a href="../contactus">Contact</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div className="footer-social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-youtube"></i>
      </div>

      <div className="footer-bottom">
        © 2025 Mr.Roxvjdj5. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
