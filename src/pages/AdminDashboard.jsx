import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Adminlogin from "./Adminlogin";
import Dashboardsidebar from "../components/Dashboardsidebar";
import DashboardHome from "../components/DashboardHome";
import Donor from "./Donor";
import Donation from "./Donation";
import BloodRequests from "./Bloodrequest";
import Requesthistory from "./Requesthistory";

// Check admin login status from localStorage
function isAdminLoggedIn() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.role === "admin" || user?.isAdmin === true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("home"); // default to home
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Check admin login on component mount
  useEffect(() => {
    const loggedIn = isAdminLoggedIn();
    setIsAdmin(loggedIn);

    if (!loggedIn) {
      // Optionally redirect to login page
      // navigate("/Adminlogin");
    }
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <DashboardHome />;
      case "donor":
        return <Donor />;
      case "donations":
        return <Donation />;
      case "bloodRequests":
        return <BloodRequests />;
      case "requestHistory":
        return <Requesthistory />;
      default:
        return <DashboardHome />;
    }
  };

  if (!isAdmin) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Access denied</h2>
        <p>You must be logged in as an admin to view this page.</p>
        <Adminlogin />
      </div>
    );
  }

  return (
    <div className="admin-dashboard-root">
      <Dashboardsidebar
        activeItem={activeComponent}
        navigate={navigate}
        setActiveComponent={setActiveComponent}
      />
      {renderComponent()}
    </div>
  );
}

export default AdminDashboard;
