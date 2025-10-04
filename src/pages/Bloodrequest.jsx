import React from "react";

const BloodRequests = () => {
  return (
    <div className="page-content">
      <h2 style={{ textAlign: "center", color: "#c62828" }}>Blood Requests</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Requester Name</th>
            <th>Blood Group</th>
            <th>Units Needed</th>
            <th>Hospital</th>
            <th>Status</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Mehta</td>
            <td>B+</td>
            <td>2</td>
            <td>City Hospital</td>
            <td>Pending</td>
            <td>01-Oct-2025</td>
          </tr>
          <tr>
            <td>LifeCare Clinic</td>
            <td>O-</td>
            <td>1</td>
            <td>LifeCare</td>
            <td>Approved</td>
            <td>28-Sep-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodRequests;