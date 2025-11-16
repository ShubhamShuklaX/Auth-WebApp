import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name}! 👋</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Account Status</h3>
          <p>✓ Active</p>
        </div>
        <div className="stat-card">
          <h3>Security Level</h3>
          <p>🔐 High</p>
        </div>
        <div className="stat-card">
          <h3>Member Since</h3>
          <p>📅 {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="user-info">
        <h2>👤 Profile Information</h2>
        <p>
          <strong>Full Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email Address:</strong> {user?.email}
        </p>
        <p>
          <strong>User ID:</strong> {user?._id}
        </p>
        <p>
          <strong>Authentication:</strong> JWT Token Based
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
