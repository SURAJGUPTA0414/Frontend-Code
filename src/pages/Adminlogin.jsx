import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(""); // changed from email to username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:2911/admin/login", // your API URL
        {
          username: username,
          password: password,
        }
      );

      const data = response.data;

      if (data.success) {
        // ✅ Save admin info to localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: data.username,
            role: data.role,
            isAdmin: data.role === "admin",
          })
        );
        localStorage.setItem("isAdmin", data.role === "admin" ? "true" : "false");

        // ✅ Redirect to admin dashboard
        window.location.href = "/AdminDashboard";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center" style={{ minHeight: "85vh", padding: "20px" }}>
      <div className="login-card p-4 shadow" style={{ width: "400px", borderRadius: "10px", backgroundColor: "#fff" }}>
        <h4 className="text-center mb-3">Admin Login</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              required
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

        {error && <p className="text-danger text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
