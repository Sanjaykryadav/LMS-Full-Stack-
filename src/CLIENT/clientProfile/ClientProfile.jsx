import React, { useState, useEffect } from "react";
import { useLoginState } from "../../LoginState";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { backend_server } from "../../main";
import ClientDashboard from "./ClientDashboard";
import ClientDetails from "./ClientDetails";
import ClientLogout from "../clientLogout/ClientLogout";
import "./clientprofile.css";

const ClientProfile = () => {
  const userLoginState = useLoginState();

  const getSingleUser_API_URL = `${backend_server}/api/v1/users/`;

  const [userBookData, setUserBookData] = useState([]);
  const [userData, setUserData] = useState();

  // Using post to send Cookie and fetch user data
  const fetchData = async () => {
    try {
      const response = await axios.post(getSingleUser_API_URL, {});

      const bookData = await response.data.bookDataAll;
      const usersData = await response.data.userData;

      if (bookData) {
        setUserBookData(bookData);
      }
      if (usersData) {
        setUserData(usersData);
      }
    } catch (error) {
      console.log(error.response);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userBookData, userData]);

  const [showDashboard, setShowDashboard] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleOnclickDashboard = () => {
    setShowDashboard(true);
    setShowProfile(false);
    setShowLogout(false);
  };
  const handleOnclickProfile = () => {
    setShowProfile(true);
    setShowDashboard(false);
    setShowLogout(false);
  };
  const handleOnclickLogout = () => {
    setShowLogout(true);
    setShowDashboard(false);
    setShowProfile(false);
  };

  const CustomSVG = () => (
    <svg className="custom-svg" width="13" height="13" viewBox="0 0 256 256">
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 35.813 54.013 H 4.514 C 2.025 54.013 0 51.987 0 49.498 V 4.514 C 0 2.025 2.025 0 4.514 0 h 31.299 c 2.489 0 4.514 2.025 4.514 4.514 v 44.984 C 40.328 51.987 38.303 54.013 35.813 54.013 z"
          className="path-style"
          strokeLinecap="round"
        />
        <path
          d="M 35.813 90 H 4.514 C 2.025 90 0 87.975 0 85.485 V 69.741 c 0 -2.489 2.025 -4.515 4.514 -4.515 h 31.299 c 2.489 0 4.514 2.025 4.514 4.515 v 15.744 C 40.328 87.975 38.303 90 35.813 90 z"
          className="path-style"
          strokeLinecap="round"
        />
        <path
          d="M 85.485 90 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 40.501 c 0 -2.489 2.025 -4.514 4.515 -4.514 h 31.299 c 2.489 0 4.515 2.025 4.515 4.514 v 44.984 C 90 87.975 87.975 90 85.485 90 z"
          className="path-style"
          strokeLinecap="round"
        />
        <path
          d="M 85.485 24.773 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 4.514 C 49.672 2.025 51.697 0 54.187 0 h 31.299 C 87.975 0 90 2.025 90 4.514 v 15.745 C 90 22.748 87.975 24.773 85.485 24.773 z"
          className="path-style"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  return (
    <div className="container-fluid page">
      <Row className='my-3'>
        <h1 className='h1 text-center'>
          Profile
        </h1>
      </Row>

      <Row className="row client-sidebar">
        {/* Left Bar */}
        <Col className="col-md-2 client-dashboard-buttons ">
          <button
            onClick={handleOnclickDashboard}
            className=" button"
            style={{ width: "100%" }}
          >
            <CustomSVG />
            Dashboard
            <div class="arrow">›</div>
          </button>
          <button
            onClick={handleOnclickProfile}
            className=" button"
            style={{ width: "100%" }}
          >
            <CustomSVG />
            My Details
            <div class="arrow">›</div>
          </button>
          <button
            className=" button"
            onClick={handleOnclickLogout}
            style={{ width: "100%" }}
          >
            <CustomSVG />
            Logout
            <div class="arrow">›</div>
          </button>
        </Col>

        {/* Right Bar Page */}
        {/* Dashboard */}

        {showDashboard && (
          <Col>
            <ClientDashboard userBookData={userBookData}></ClientDashboard>
          </Col>
        )}

        {/* Profile */}
        {showProfile && (
          <Col>
            <ClientDetails userData={userData}></ClientDetails>
          </Col>
        )}

        {/* Logout */}
        {showLogout && (
          <Col>
            <ClientLogout />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ClientProfile;
