import React from "react";
import './home.css' 

import BannerHome from "../bannerHome/BannerHome";
import FeaturedBooks from "../featuredBooks/FeaturedBooks";
import RecentlyAddedBooks from "../recentlyAddedBooks/RecentlyAddedBooks";
import { Row } from "react-bootstrap";
import RecommendedBooks from "../recommendedBooks/RecommendedBooks";
import LocalStorageRecommendations from "../recommendations/LocalStorageRecommendations";

const Home = () => {
  return (
    <div className="home-main-div">
      <BannerHome />
      <div className="container">
        <Row className="my-3">
          <RecommendedBooks />
        </Row>
        <Row>
          <LocalStorageRecommendations />
        </Row>
        <Row>
          <RecentlyAddedBooks />
        </Row>
        <Row>
          <FeaturedBooks />
        </Row>
      </div>
    </div>
  );
};

export default Home;
