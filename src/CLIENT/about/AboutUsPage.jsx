import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsBanner from "./AboutUsBanner";
import "./aboutus.css";
import { about_data } from "./aboutusData";

const AboutUsPage = () => {
  return (
    <Container>
      <h1 className="h1 text-center mx-auto" id="about-heading">
        About Us
      </h1>
      <AboutUsBanner />
      <Row className="mt-5 aboutus-bottom-section">
        {about_data.map((items) => {
          const { id, title, description } = items;
          return (
            <Col lg={4} key={id}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-5 aboutus-bottom-section lastText">
        <div>
          At Bookism, we’re more than just a bookstore – we’re a community of
          book lovers, storytellers, and dreamers. Whether you're here to find
          your next favorite book or to connect with fellow readers, we’re here
          to share in the magic of reading. Thank you for being a part of our
          story – we can’t wait to continue this literary journey with you!
        </div>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
