import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(""); // use email instead of username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]); // store all users

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2911/validlogin",
        null,
        {
          params: {
            p_useremail: email,
            p_userpassword: password,
          },
        }
      );

       if (response.status === 200) {
        // ✅ Save username to localStorage
        localStorage.setItem("username", response.data);
        window.location.href = "Homemain";      
      }

      console.log("Login response:", response.data);

      // Redirect if login is OK
      // window.location.href = "Homemain";
    } catch (err) {
      if (err.response) {
        setError(err.response.data); // shows message from backend
      } else {
        setError("Login failed. Try again.");
      }

      // Fetch all registered users on login failure
      try {
        const usersResponse = await axios.get("http://localhost:2911/newuser");
        setUsers(usersResponse.data);
      } catch (userErr) {
        console.log("Failed to fetch users:", userErr);
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center" style={{ minHeight: "85vh", padding: "20px" }}>
      <div className="login-card p-4 shadow" style={{ width: "400px", borderRadius: "10px", backgroundColor: "#fff" }}>
        <h4 className="text-center mb-3">Login Form</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              required
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>

          <p className="mt-3">
              Not a user? <a href="../Registration" >Register</a>
            </p>

        {error && <p className="text-danger text-center mt-2">{error}</p>}
      </div>

      {users.length > 0 && (
        <div style={{ marginTop: "30px", width: "80%", maxWidth: "600px" }}>
          <h4>Registered Users:</h4>
          <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.username || user.p_username}</td>
                  <td>{user.email || user.p_useremail}</td>
                  <td>{user.password || user.p_userpassword}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Login;
