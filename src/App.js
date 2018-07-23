import React, { Component } from "react";
import "./App.css";
import Blocks from "./Components/Blocks";
import StudentView from "./Components/StudentView";
class App extends Component {
  state = {
    students: [
      {
        id: 1,
        name: "Amul Batra",
        cohort: 1,
        end_date: "01/06/16",
        block: "Projects",
        block_review: "pass",
        repeats: 0,
        course_status: "current"
      },
      {
        id: 2,
        name: "Joris Bohnson",
        cohort: 1,
        end_date: "01/06/16",
        block: "Core",
        block_review: "pass",
        repeats: 1,
        course_status: "current"
      },
      {
        id: 3,
        name: "Agnieska Romanova",
        cohort: 1,
        end_date: "01/06/16",
        block: "Core",
        block_review: "pass",
        repeats: 2,
        course_status: "current"
      },
      {
        id: 4,
        name: "Jonathan Piebarm",
        cohort: 1,
        end_date: "01/06/16",
        block: "Back End 2",
        block_review: "pending",
        repeats: 1,
        course_status: "current"
      }
    ]
  };

  render() {
    return (
      <div className="app-window">
        <div className="block-container">
          <div className="block-item">
            <h1>Core</h1>
            <Blocks students={this.state.students} block="Core" />
          </div>
          <div className="block-item">
            <h1>Back End 1</h1>
            <Blocks students={this.state.students} block="Back End 1" />
          </div>
          <div className="block-item">
            <h1>Back End 2</h1>
            <Blocks students={this.state.students} block="Back End 2" />
          </div>
          <div className="block-item">
            <h1>Front End 1</h1>
            <Blocks students={this.state.students} block="Front End 1" />
          </div>
          <div className="block-item">
            <h1>Front End 2</h1>
            <Blocks students={this.state.students} block="Front End 2" />
          </div>
          <div className="block-item">
            <h1>Projects</h1>
            <Blocks students={this.state.students} block="Projects" />
          </div>
          {/* <Blocks students={this.state.students} /> */}
        </div>
        <StudentView />
      </div>
    );
  }
}

export default App;
