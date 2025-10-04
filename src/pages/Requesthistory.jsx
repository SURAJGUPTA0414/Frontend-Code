import React from "react";

const Requesthistory = () => {
  return (
    <div className="page-content">
      <h2 style={{ textAlign: "center", color: "#c62828" }}>Request History</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Requester Name</th>
            <th>Blood Group</th>
            <th>Units Requested</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Verma</td>
            <td>AB+</td>
            <td>2</td>
            <td>Approved</td>
            <td>20-Sep-2025</td>
          </tr>
          <tr>
            <td>Clinic Care</td>
            <td>O-</td>
            <td>1</td>
            <td>Pending</td>
            <td>28-Sep-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Requesthistory;