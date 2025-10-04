import React from "react";
import "../styles/aboutus.css"; 
import deepakImg from "../assets/deepak.jpg";
import layaImg from "../assets/laya.jpg";
import inayatImg from "../assets/inayat.jpg";
import vijayImg from "../assets/vijay.jpg";


const AboutUs = () => {
  return (
    <div>
     

      <div className="container-about">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Mr.Roxvjdj5 enforces Drug & Cosmetic Act, National blood policy
            standards and guidelines ensuring proper collection & donation,
            effective management and monitoring the quality and quantity of the
            donated blood. Considering the national roll out, e-Rakt Kosh has
            been developed with modular and scalable approach with configurable
            rule based architecture allowing customization to easily incorporate
            specific requirements from nationwide stakeholders.
          </p>
          <p>
            Millions of people need blood transfusions each year. Some may need
            blood during surgery. Others depend on it after an accident or
            because they have a disease that requires certain parts of blood.
            Blood donation makes all of this possible.
          </p>
        </section>

        <section className="section1">
          <div className="row">
            <div className="col">
              <h1>Objectives</h1>
              <ul>
                <li>Safe and Adequate Blood Supplies</li>
                <li>Reduced Turnaround Time</li>
                <li>Preventing Wastage of Blood</li>
                <li>Restrict Professional Donors</li>
                <li>Networking of Blood Banks</li>
                <li>Donor Repository</li>
              </ul>
            </div>
            <div className="col">
              <h1>Salient Features</h1>
              <ul>
                <li>Web Based Application</li>
                <li>Aadhar Linkage</li>
                <li>Decision Support</li>
                <li>Enforces Guidelines</li>
                <li>Dashboard</li>
                <li>Statutory Reports</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={deepakImg} alt="Deepak Gupta" />

              <h4>Deepak Gupta</h4>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="team-member">
              <img src={layaImg} alt="Laya Sidral" />
              <h4>Laya Sidral</h4>
              <p>Manager</p>
            </div>
            <div className="team-member">
              <img src={inayatImg} alt="Inayat Khan" />
              <h4>Inayat Khan</h4>
              <p>Marketing Head</p>
            </div>
            <div className="team-member">
              <img src={vijayImg} alt="Vijay Gupta" />
              <h4>Vijay Gupta</h4>
              <p>Create Website</p>
            </div>
          </div>
        </section>
      </div>

     
    </div>
  );
};

export default AboutUs;
