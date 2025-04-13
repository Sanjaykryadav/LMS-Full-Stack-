import React from "react";
import "./pagenotfound.css";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  const animation = lottie.loadAnimation({
    container: document.querySelector(".lottie-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://lottie.host/d987597c-7676-4424-8817-7fca6dc1a33e/BVrFXsaeui.json",
  });
  return (
    <>
      <div class="error-container">
        <div class="lottie-animation"></div>
        <div class="error-content">
          <h1>404</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/" class="btn btn-primary">
            Goto Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default PagenotFound;
