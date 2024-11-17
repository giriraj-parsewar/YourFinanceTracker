import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2>Welcome to the Finance Tracker App</h2>
//       <p>Please sign in or sign up to get started.</p>
//       <div className="home-links">
//         <Link to="/signin" className="home-link">Sign In</Link>
//         <Link to="/signup" className="home-link">Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <nav className="navbar">
          <h1 className="logo">FinanceTracker</h1>
          <div className="auth-buttons">
            <Link to="/signin" className="btn signin-btn">Sign In</Link>
            <Link to="/signup" className="btn signup-btn">Sign Up</Link>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Expenses Effortlessly</h1>
          <p>Manage your finances smartly and stay on top of your budget.</p>
          <div className="cta-container">
            <button  className="cta-btn">Get Started</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Real-Time Tracking</h3>
            <p>Monitor your expenses in real-time with intuitive graphs and stats.</p>
          </div>
          <div className="feature-card">
            <h3>Budget Alerts</h3>
            <p>Stay informed with alerts when you're close to exceeding your budget.</p>
          </div>
          <div className="feature-card">
            <h3>Data Visualization</h3>
            <p>Visualize your spending patterns with beautiful charts.</p>
          </div>
          <div className="feature-card">
            <h3>Fully Custimzable</h3>
            <p>Customise your dashboard the way you like.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="footer-p">@ Made by Giri </p>
      </footer>
      
    </div>
  );
};

export default Home;
