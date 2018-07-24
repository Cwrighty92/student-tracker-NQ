import React, { Component } from "react";
import "../App.css";

class StudentView extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  render() {
    return (
      <div className="student-view">
        <div>
          First Name:
          <input
            className="new-student-input"
            type="text"
            name="firstname"
            value={this.state.firstName}
            onChange={this.handleInput}
          />
          <br />
          Last Name:
          <input
            className="new-student-input"
            type="text"
            name="lastname"
            value={this.state.lastName}
            onChange={this.handleInput}
          />
          <br />
          <button
            className="submit-student"
            type="submit"
            value="Submit"
            onClick={() =>
              this.props.createStudent(
                this.state.firstName,
                this.state.lastName
              )
            }
          >
            Add User
          </button>
        </div>
      </div>
    );
  }
  handleInput = event => {
    if (event.target.name === "firstname") {
      this.setState({
        firstName: event.target.value
      });
    } else
      this.setState({
        lastName: event.target.value
      });
  };
}

export default StudentView;
