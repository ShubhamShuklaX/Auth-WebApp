import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-container">
      <h1>Secure Authentication Made Simple</h1>
      <p>
        Experience modern authentication with industry-standard security. Built
        with the MERN stack for production-ready applications.
      </p>
      {user ? (
        <div>
          <p className="welcome-text">👋 Welcome back, {user.name}!</p>
          <div className="button-group">
            <Link to="/dashboard">
              <button className="btn">Go to Dashboard</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="button-group">
            <Link to="/register">
              <button className="btn">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline">Sign In</button>
            </Link>
          </div>
        </div>
      )}

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔐</div>
          <h3>Secure by Default</h3>
          <p>
            Industry-standard bcrypt password hashing with JWT token
            authentication ensures your data stays protected.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>
            Built with React and Vite for optimal performance and instant hot
            module replacement during development.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Modern UI/UX</h3>
          <p>
            Beautiful, responsive design with smooth animations and
            glassmorphism effects for a premium feel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
