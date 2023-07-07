import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Home component
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// About component
const About = () => {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about/company">Company</Link>
          </li>
          <li>
            <Link to="/about/team">Team</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/team" element={<Team />} />
      </Routes>
    </div>
  );
};

// Contact component
const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <nav>
        <ul>
          <li>
            <Link to="/contact/us">Us</Link>
          </li>
          <li>
            <Link to="/contact/location">Location</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/contact/us" element={<Us />} />
        <Route path="/contact/location" element={<Location />} />
      </Routes>
    </div>
  );
};

// Nested components within About
const Company = () => {
  return <h3>Company</h3>;
};

const Team = () => {
  return <h3>Team</h3>;
};

// Nested components within Contact
const Us = () => {
  return <h3>Us</h3>;
};

const Location = () => {
  return <h3>Location</h3>;
};

// Privacy component
const Privacy = () => {
  return <h2>Privacy</h2>;
};

// App component
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
