import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboardsidebar({ activeItem, setActiveComponent }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear admin login info
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");

    // Redirect to login page
    navigate("/Adminlogin");
  };

  return (
    <div className="sidebar">
      {/* Logout button at the top */}
      {/* <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#c62828",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div> */}

      <div className="logo" style={{ marginBottom: "20px" }}>Blood Bank</div>

      <nav>
        <ul>
          <li>
            <a
              className={activeItem === "home" ? "active" : ""}
              onClick={() => setActiveComponent("home")}
            >
              <span className="material-icons">home</span>{" "}
              <span>Blood Stock</span>
            </a>
          </li>
          <li>
            <a
              className={activeItem === "donor" ? "active" : ""}
              onClick={() => setActiveComponent("donor")}
            >
              <span className="material-icons">person</span>{" "}
              <span>Donor</span>
            </a>
          </li>
          <li>
            <a
              className={activeItem === "donations" ? "active" : ""}
              onClick={() => setActiveComponent("donations")}
            >
              <span className="material-icons">local_hospital</span>
              <span>Donations</span>
            </a>
          </li>
          <li>
            <a
              className={activeItem === "requests" ? "active" : ""}
              onClick={() => setActiveComponent("bloodRequests")}
            >
              <span className="material-icons">bloodtype</span>
              <span>Blood Requests</span>
            </a>
          </li>
          <li>
            <a
              className={activeItem === "history" ? "active" : ""}
              onClick={() => setActiveComponent("requestHistory")}
            >
              <span className="material-icons">history</span>
              <span>Request History</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboardsidebar;
