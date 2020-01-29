import React, { useState } from "react";
import "../App.css";

export const StudentView = ({ createStudent }) => {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");

  const handleInput = event => {
    if (event.target.name === "firstname") {
      updateFirstName(event.target.value);
    } else updateLastName(event.target.value);
  };

  return (
    <div className="student-view">
      First Name:
      <input
        className="new-student-input"
        type="text"
        name="firstname"
        value={firstName}
        onChange={handleInput}
      />
      <br />
      Last Name:
      <input
        className="new-student-input"
        type="text"
        name="lastname"
        value={lastName}
        onChange={handleInput}
      />
      <br />
      <button
        className="submit-student"
        type="submit"
        value="Submit"
        onClick={() => createStudent(firstName, lastName)}
      >
        Add User
      </button>
    </div>
  );
};

export default StudentView;
