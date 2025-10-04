// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Donor = () => {
//   const [donors, setDonors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const response = await axios.get("http://localhost:2911/donors/all_donor_list");
//         setDonors(response.data);
//       } catch (err) {
//         console.error("Error fetching donors:", err);
//         setError("Failed to fetch donors. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonors();
//   }, []);

//   return (
//     <div className="page-content">
//       <h2 style={{ textAlign: "center", color: "#c62828" }}>Donor List</h2>

//       {loading ? (
//         <p style={{ textAlign: "center" }}>Loading donors...</p>
//       ) : error ? (
//         <p style={{ textAlign: "center", color: "red" }}>{error}</p>
//       ) : donors.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No donors found.</p>
//       ) : (
//         <table className="styled-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Blood Group</th>
//               <th>Contact</th>
//               <th>Last Donation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {donors.map((donor) => (
//               <tr key={donor.donorId}>
//                 <td>{donor.fullName}</td>
//                 <td>{donor.bloodGroup}</td>
//                 <td>{donor.phoneNo}</td>
//                 <td>{donor.dob}</td> {/* or use a 'lastDonationDate' field if exists */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Donor;
import React, { useEffect, useState } from "react";

const Donor = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate fetching dummy data
    const dummyData = [
      {
        donorId: 1,
        fullName: "Aarav Mehta",
        bloodGroup: "B+",
        phoneNo: "9876543210",
        dob: "2023-08-15", // Replace with lastDonationDate if available
      },
    ];

    setTimeout(() => {
      setDonors(dummyData);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  return (
    <div className="page-content">
      <h2 style={{ textAlign: "center", color: "#c62828" }}>Donor List</h2>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading donors...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : donors.length === 0 ? (
        <p style={{ textAlign: "center" }}>No donors found.</p>
      ) : (
        <table className="styled-table" style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Contact</th>
              <th>Last Donation</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.donorId}>
                <td>{donor.fullName}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.phoneNo}</td>
                <td>{donor.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Donor;
