import React, { Component } from "react";
import "../App.css";
import Blocks from "./Blocks";
import StudentView from "./StudentView";

const blocks = [
  "Core",
  "Back End 1",
  "Back End 2",
  "Front End 1",
  "Front End 2",
  "Projects"
];

export class Home extends Component {
  render() {
    return (
      <div className="app-window">
        <h1>
          Total Students:{" "}
          {
            this.props.students.filter(
              student =>
                student.course_status === "current" && student.block < 7
            ).length
          }
        </h1>
        <div className="block-container">
          {blocks.map((block, index) => (
            <div className="block-item">
              <h1>{block}</h1>
              <Blocks
                students={this.props.students}
                block={String(index + 1)}
                block_data={this.props.block_data}
                changeReviewStatus={this.props.changeReviewStatus}
              />
            </div>
          ))}
        </div>
        <StudentView createStudent={this.props.createStudent} />
      </div>
    );
  }
}
export default Home;
