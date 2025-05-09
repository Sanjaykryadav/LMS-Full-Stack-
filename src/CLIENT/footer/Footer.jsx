import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer" style={{ marginTop: "auto" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="h5 mt-3">Info</h5>
            <ul className="list-unstyled">
              <li>Email: info@library.com</li>
              <li>Phone: +977-98446465438</li>
              <li>Address: Kalyani, West Bengal</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="h5 mt-3">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="h5 mt-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row rowborder">
          <div className="col-md-4">
            <div className="bot">
            Copyright@{currentYear}. Created By S.K.Yadav ‪‪❤︎‬
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
