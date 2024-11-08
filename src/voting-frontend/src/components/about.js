// About.js

import React from "react";
import Layout from "./Layout";
import "./about.css"; // Import the CSS file

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">ABOUT THE APP</h2>
          <p className="about-description">
          Welcome to our blockchain-based voting web app! We are committed <br />
          to revolutionizing the democratic process by leveraging the power <br />
          of blockchain technology. Our platform aims to enhance transparency,<br />
           security, and accessibility in elections, ensuring trust and integrity in every vote cast.
          </p>
          <br /><br /><br /><br />
          <h2 className="about-title2">OUR MISSION</h2>
          <p className="about-description">
          At our core, we are driven by a mission to empower individuals to participate in the  <br />
          democratic process with confidence. Through the utilization of blockchain  <br />
          technology, we strive to address the inherent challenges and vulnerabilities<br />
          present in traditional voting systems. Our goal is to create a voting platform that is <br />
          secure, transparent, and resilient to tampering or manipulation.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
