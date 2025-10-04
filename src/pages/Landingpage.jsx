import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Homemain from "../pages/Homemain";
import Login from "../pages/Login.jsx";
import Registration from "../pages/Registration.jsx";
import OTPVerificationPage from "./OTPVerificationPage.jsx";
import BloodAv from "./bloodav.jsx";
import Razorpayhandler from "./Razorpayhandler.jsx";
import BloodDo from "./blooddo.jsx";
import AboutUs from "./aboutus.jsx";
import ContactUs from "./contactus";
import AdminDashboard from "./AdminDashboard.jsx";  
import Adminlogin from "./Adminlogin.jsx"
import Donation from "./Donation.jsx";

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homemain />} />

          <Route path="/Homemain" element={<Homemain />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/adminLogin" element={<Adminlogin />} />
          <Route path="/OTPVerificationPage" element={<OTPVerificationPage />}/>
          <Route path="/boodavilable" element={<BloodAv />} />
          <Route path="/booddonation" element={<BloodDo />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/razorpayhandler" element={<Razorpayhandler />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />

          <Route path="*" element={<Navigate to="/" replace />} />

          
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Landingpage;