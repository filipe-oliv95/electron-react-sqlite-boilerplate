import { Link } from "react-router-dom";
import reactLogo from "../assets/react_logo.png";
import electronLogo from "../assets/electron_logo.png";

export function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img className="logo-electron" src={electronLogo} alt="Electron Logo" />
        <span className="plus-sign">+</span>
        <img className="logo-react" src={reactLogo} alt="React Logo" />
      </header>

      <h1 className="title">Electron + React.js + Better SQLite 3</h1>
      <p className="description">
        This is a boilerplate demonstrating the integration between Electron,
        React, and SQLite.
      </p>
      <p className="description">
        The routes are configured using Electron Router DOM.
      </p>

      <nav className="navigation">
        <h2>Routes</h2>
        <ul>
          <li>
            <Link to="/first-page">Database Demo</Link>
          </li>
          <li>
            <Link to="/second-page">System Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
