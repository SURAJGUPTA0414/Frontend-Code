import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/blooddo.css";

const BloodDo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    state: "",
    district: "",
    address: "",
    bloodGroup: "",
    bloodType: "Whole Blood",
  });

  const [message, setMessage] = useState("");

  const districtsByState = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
    Karnataka: ["Bengaluru Urban", "Mysuru", "Mangaluru", "Hubli"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "state") {
      setFormData((prev) => ({ ...prev, state: value, district: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const donorData = {
        fullName: formData.name,
        email: formData.email,
        phoneNo: formData.phone,
        dateOfBirth: formData.dob,
        state: formData.state,
        district: formData.district,
        address: formData.address,
        bloodGroup: formData.bloodGroup,
        bloodType: formData.bloodType,
      };

      const response = await axios.post(
        "http://localhost:2911/donors/add",
        donorData
      );

      setMessage("✅ Registration successful!");
      console.log("Server Response:", response.data);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        state: "",
        district: "",
        address: "",
        bloodGroup: "",
        bloodType: "Whole Blood",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("❌ Failed to submit form. Please try again.");
    }
  };

  return (
    <section className="donate-section">
      <h2>Blood Donation Registration</h2>

      {message && (
        <div
          className={`alert ${
            message.startsWith("✅") ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Name */}
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* DOB */}
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* State */}
          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select
              id="state"
              className="form-select"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">-- Select State --</option>
              {Object.keys(districtsByState).map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div className="col-md-6">
            <label htmlFor="district" className="form-label">
              District
            </label>
            <select
              id="district"
              className="form-select"
              value={formData.district}
              onChange={handleChange}
              required
              disabled={!formData.state}
            >
              <option value="">-- Select District --</option>
              {formData.state &&
                districtsByState[formData.state].map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
            </select>
          </div>

          {/* Address */}
          <div className="col-md-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              className="form-control"
              placeholder="Enter your full address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Blood Group */}
          <div className="col-md-6">
            <label htmlFor="bloodGroup" className="form-label">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              className="form-select"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Blood Group --</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          {/* Blood Type */}
          <div className="col-md-6">
            <label htmlFor="bloodType" className="form-label">
              Blood Type
            </label>
            <select
              id="bloodType"
              className="form-select"
              value={formData.bloodType}
              onChange={handleChange}
              required
            >
              <option>Whole Blood</option>
              <option>RBC</option>
              <option>WBC</option>
              <option>Platelets</option>
              <option>Plasma</option>
            </select>
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-3">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BloodDo;
