import React from "react";

const Donation = () => {
  return (
    <div className="page-content">
      <h2 style={{ textAlign: "center", color: "#c62828" }}>Recent Donations</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Blood Group</th>
            <th>Units Donated</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>O+</td>
            <td>1</td>
            <td>12-Aug-2025</td>
          </tr>
          <tr>
            <td>Priya Mehta</td>
            <td>A-</td>
            <td>1</td>
            <td>05-Jul-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Donation;