import React, { Component } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Blocks from "./Blocks";
import StudentView from "./StudentView";
import Admin from "./Admin";

class Home extends Component {
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
          <div className="block-item">
            <h1>Core</h1>
            <Blocks
              students={this.props.students}
              block="1"
              block_data={this.props.block_data}
              changeReviewStatus={this.props.changeReviewStatus}
            />
          </div>
          <div className="block-item">
            <h1>Back End 1</h1>
            <Blocks
              students={this.props.students}
              block="2"
              block_data={this.props.block_data}
              changeReviewStatus={this.props.changeReviewStatus}
            />
          </div>
          <div className="block-item">
            <h1>Back End 2</h1>
            <Blocks
              students={this.props.students}
              block="3"
              block_data={this.props.block_data}
              changeReviewStatus={this.props.changeReviewStatus}
            />
          </div>
          <div className="block-item">
            <h1>Front End 1</h1>
            <Blocks
              students={this.props.students}
              block="4"
              block_data={this.props.block_data}
              changeReviewStatus={this.props.changeReviewStatus}
            />
          </div>
          <div className="block-item">
            <h1>Front End 2</h1>
            <Blocks
              students={this.props.students}
              block="5"
              block_data={this.props.block_data}
              changeReviewStatus={this.props.changeReviewStatus}
            />
          </div>
          <div className="block-item">
            <h1>Projects</h1>
            <Blocks
              students={this.props.students}
              block="6"
              block_data={this.props.block_data}
              changeReviewStatus={this.props.changeReviewStatus}
            />
          </div>
          {/* <Blocks students={this.props.state.students} /> */}
        </div>
        <StudentView createStudent={this.props.createStudent} />
      </div>
    );
  }
}
export default Home;
