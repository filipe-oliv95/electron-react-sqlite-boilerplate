import { Link } from "react-router-dom";
import React from "react";

export function SystemInfo() {
  return (
    <>
      <h1>System Info</h1>
      <p className="description">
        Retrieving controlled data from the main process to the renderer through
        a preload script and the contextBridge API:
      </p>
      <section className="versions">
        <h2>Versions:</h2>
        <h3>Node.js version: v{window.api?.versions?.node()}</h3>
        <h3>Electron version: v{window.api?.versions?.electron()}</h3>
      </section>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Go Back to Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
