import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

export function FirstPage() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Fetch data from the database
  const fetchData = useCallback(() => {
    const people = window.api?.sqlite?.personDB?.readAllPerson();
    setData(people || []);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to insert a new person
  const handleInsertPerson = () => {
    if (!name || !age) {
      alert("Please enter both name and age.");
      return;
    }

    window.api?.sqlite?.personDB?.insertPerson(name, parseInt(age));
    setName("");
    setAge("");
    fetchData();
  };

  // Function to delete a person by ID
  const handleDeletePerson = (id) => {
    window.api?.sqlite?.personDB?.deletePerson(id);
    fetchData();
  };

  return (
    <>
      <h1>Database Demo</h1>
      <p className="description">
      Manage your local database by adding new records and deleting existing ones. Your data is securely stored using SQLite.
      </p>

      {/* Form to insert a new person */}
      <div className="insert-form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleInsertPerson}>Add Person</button>
      </div>

      {/* Table displaying people from database */}
      <div className="database">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>
                    <button onClick={() => handleDeletePerson(person.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Go Back to Home</Link>
          </li>
        </ul>
      </nav>
      </div>

    </>
  );
}
