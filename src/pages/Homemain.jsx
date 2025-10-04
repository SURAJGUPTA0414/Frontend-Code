import React, { useState } from "react";
import "../styles/Homemain.css";

// Images
import searchImg from "../assets/Searchimage.jpg";
import directoryImg from "../assets/Directory.jpg";
import campImg from "../assets/logo.jpg";
import donorImg from "../assets/logo.jpg";
import registerImg from "../assets/logo.jpg";
import logoImg from "../assets/logo.jpg";
import slide2 from "../assets/2.jpg";
import slide3 from "../assets/3.jpg";

const Homemain = () => {
  // Blood donation state
  const bloodData = {
        "A+": { receive: ["A+", "A-", "O+", "O-"], give: ["A+", "AB+"] },
        "A-": { receive: ["A-", "O-"], give: ["A+", "A-", "AB+", "AB-"] },
         "B+": { receive: ["B+", "B-", "O+", "O-"], give: ["B+", "AB+"] },
        "B-": { receive: ["B-", "O-"], give: ["B+", "B-", "AB+", "AB-"] },
        "O+": { receive: ["O+", "O-"], give: ["A+", "B+", "AB+", "O+"] },
        "O-": { receive: ["O-"], give: ["Everyone"] },
        "AB+": { receive: ["Everyone"], give: ["AB+"] },
        "AB-": { receive: ["AB-", "A-", "B-", "O-"], give: ["AB+", "AB-"] }

  };
  const [selectedBlood, setSelectedBlood] = useState("A+");

  // Services
  const services = [
    { title: "Blood Availability Search", img: searchImg, alt: "Blood Availability", link: "#" },
    { title: "Blood Bank Directory", img: directoryImg, alt: "Directory", link: "#" },
    { title: "Blood Donation Camps", img: campImg, alt: "Camps", link: "#" },
    { title: "Donor Login", img: donorImg, alt: "Donor Login", link: "#" },
    { title: "Register Voluntary Blood Camp", img: registerImg, alt: "Register Camp", link: "#" },
  ];

  return (
    <>
      {/* Scrolling heading */}
      <div className="scroll-container">
        <div className="scroll-heading">
          <h1>
            <b>
              <i>
                Mr.Roxvjdj5 was Inaugurated on <u>18 May 2025</u> by Itvedant Institute From Dadar Branch
              </i>
            </b>
          </h1>
        </div>
      </div>

      {/* ABOUT + CAROUSEL */}
      <div className="container fs-5">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h3 className="text-center">
              <u>
                <b>
                  <i>About Mr.Roxvjdj5</i>
                </b>
              </u>
            </h3>
            <p>
              Mr.Roxvjdj5 is a platform to provide information about blood banks, blood availability, blood donation camps and assistant automation.
              More than 3800 blood banks are registered on Mr.Roxvjdj5 from 29 states and 8 UTs.
            </p>
            <p>
              This portal enforces national blood policy and Drug & Cosmetic Act for proper blood donation, tracking, and transparency.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="col-md-8">
            <h2 className="text-center">
              <u>
                <b>
                  <i>Mr.Roxvjdj5 IMAGES</i>
                </b>
              </u>
            </h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={logoImg} className="d-block w-100 carousel-img" alt="Image 1" />
                </div>
                <div className="carousel-item">
                  <img src={slide2} className="d-block w-100 carousel-img" alt="Image 2" />
                </div>
                <div className="carousel-item">
                  <img src={slide3} className="d-block w-100 carousel-img" alt="Image 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-danger fw-bold"><u>Our Services</u></h1>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="btn btn-outline-danger d-flex flex-column align-items-center p-3 shadow rounded service-btn">
              <img src={service.img} className="service-img mb-2" alt={service.alt} />
              <span>{service.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* BLOOD DONATION INFO */}
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-danger fw-bold"><u>Learn About Donation</u></h1>

        {/* Blood Type Selector */}
        <div className="blood-type-section">
          <h2 className="select-type-header">Select Your Blood Type</h2>
          <div className="blood-type-line">
            {Object.keys(bloodData).map((type) => (
              <button
                key={type}
                className={`blood-type-button ${selectedBlood === type ? "active" : ""}`}
                onClick={() => setSelectedBlood(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Donation Info */}
        <div className="donation-info-section">
          <div className="info-box receive">
            <h3>You can take from</h3>
            <ul>
              {bloodData[selectedBlood].receive.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
          <div className="info-box donate">
            <h3>You can give to</h3>
            <ul>
              {bloodData[selectedBlood].give.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Illustration */}
        <div className="illustration-section">
          <p>One Blood Donation can save up to Three Lives.</p>
        </div>
      </div>
    </>
  );
};

export default Homemain;
