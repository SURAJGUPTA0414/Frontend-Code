import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';
import logoImg from "../assets/logo.jpg";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/"); // redirect to homepage
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
      style={{ background: "linear-gradient(90deg, #8B0000, #B22222)" }}
    >
      <div className="container">
        {/* Logo & Brand */}
        <button
          className="navbar-brand d-flex align-items-center btn btn-link text-decoration-none"
          onClick={() => navigate("/Homemain")}
        >
          <img
            src={logoImg}
            alt="logo"
            width="70"
            className="me-2 rounded-circle border border-light"
          />
          <span className="fw-bold text-white">
            Blood Donation Camp{" "}
            <span style={{ color: "#FFD700" }}>Mr.Roxvjdj5</span>
          </span>
        </button>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-white"
                id="homeDropdown"
                data-bs-toggle="dropdown"
              >
                Home
              </button>
              <ul className="dropdown-menu shadow">
                <li>
                  <button className="dropdown-item" onClick={() => navigate("/Homemain")}>Home</button>
                </li>
                <li>
                  <button className="dropdown-item">About Blood Donation Camp</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => navigate("/aboutus")}>About Us</button>
                </li>
                <li>
                  <button className="dropdown-item">Gallery</button>
                </li>
                <li>
                  <button className="dropdown-item">Video Gallery</button>
                </li>
              </ul>
            </li>

            {/* Looking for Blood */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-white"
                id="bloodDropdown"
                data-bs-toggle="dropdown"
              >
                Looking For Blood
              </button>
              <ul className="dropdown-menu shadow">
                <li>
                  <button className="dropdown-item" onClick={() => navigate("/boodavilable")}>Blood Availability</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => navigate("/booddonation")}>Donate Blood</button>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => navigate("/contactus")}>Contact</button>
            </li>

            {/* Dynamic Account Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-white"
                id="accountDropdown"
                data-bs-toggle="dropdown"
              >
                {username ? username : "Account"}
              </button>
              <ul className="dropdown-menu shadow">
                {username ? (
                  <>
                    <li>
                      <button className="dropdown-item">Profile</button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/Login")}>Login</button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/AdminDashboard")}>Admin Login</button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/Registration")}>Registration</button>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex ms-lg-3 mt-2 mt-lg-0">
            <input
              className="form-control me-2 border-danger"
              type="search"
              placeholder="Search"
              style={{ minWidth: "150px" }}
            />
            <button className="btn btn-warning fw-bold" type="submit">
              Search
            </button>
          </form>

          {/* Donate */}
          <li className="nav-item p-2">
            <button
              className="btn btn-warning fw-bold"
              onClick={() => navigate("/Razorpayhandler")}
            >
              Give Money, Give Life
            </button>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;