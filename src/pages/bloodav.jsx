import React, { useState } from "react";
import axios from "axios";
import "../styles/bloodav.css";

const SearchBloodStock = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodType, setBloodType] = useState("Whole Blood");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const districtsByState = {
    maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur"],
    karnataka: ["Bengaluru Urban", "Mysuru", "Mangaluru", "Hubli", "Belagavi"],
    "uttar-pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Allahabad"],
    "tamil-nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  };

  const bloodav = async () => {
    if (!state || !district || !bloodGroup || !bloodType) {
      alert("Please select all fields!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get("http://localhost:2911/donors/search", {
      params: { state, district, bloodGroup, bloodType },
    });

      setResults(response.data);
    } catch (error) {
      console.error("Error fetching blood stock:", error);
      alert("Error fetching blood availability!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-av">
      <div className="header-av">Search Blood Stock</div>

      <div className="form-content">
        {/* State */}
        <div className="form-group">
          <label htmlFor="state">Select State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict("");
            }}
          >
            <option value="">-- Select State --</option>
            {Object.keys(districtsByState).map((st) => (
              <option key={st} value={st}>
                {st.replace("-", " ").toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="form-group">
          <label htmlFor="district">Select District</label>
          <select
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            disabled={!state}
          >
            <option value="">-- Select District --</option>
            {state &&
              districtsByState[state].map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
          </select>
        </div>

        {/* Blood Group */}
        <div className="form-group">
          <label htmlFor="blood-group">Select Blood Group</label>
          <select
            id="blood-group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">-- Select Blood Group --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Blood Type */}
        <div className="form-group">
          <label htmlFor="blood-type">Blood Type</label>
          <select
            id="blood-type"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          >
            <option>Whole Blood</option>
            <option>RBC</option>
            <option>WBC</option>
            <option>Platelets</option>
            <option>Plasma</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="search-button-container">
        <button className="search-button" onClick={bloodav}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Display Results */}
      <div className="results">
        {results.length > 0 ? (
          <table className="results-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>State</th>
                <th>District</th>
                <th>Blood Group</th>
                <th>Blood Type</th>
              </tr>
            </thead>
            <tbody>
              {results.map((donor) => (
                <tr key={donor.donor_id}>
                  <td>{donor.full_name}</td>
                  <td>{donor.email}</td>
                  <td>{donor.phone_no}</td>
                  <td>{donor.state}</td>
                  <td>{donor.district}</td>
                  <td>{donor.blood_group}</td>
                  <td>{donor.blood_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && <p>No records found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBloodStock;
