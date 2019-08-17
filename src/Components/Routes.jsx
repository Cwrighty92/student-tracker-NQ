import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { blockData } from "./appData";
import Home from "./Home";

export class Routes extends Component {
  state = {
    currentCohort: 17,
    block_data: blockData,
    students: []
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              {...this.state}
              createStudent={this.createStudent}
              changeReviewStatus={this.changeReviewStatus}
            />
          )}
        />
      </Switch>
    );
  }
  createStudent = (fname, lname) => {
    if (fname && lname) {
      const newStudent = {
        id: this.state.students.length + 1,
        name: `${fname} ${lname}`,
        cohort: this.state.currentCohort,
        end_date: "tbc",
        block: 1,
        block_review: "pending",
        repeats: 0,
        course_status: "current"
      };

      this.setState({
        students: [...this.state.students, newStudent]
      });
    }
  };

  changeReviewStatus = (name, block, result) => {
    let updatedBlockData = [...this.state.block_data];
    this.state.students.forEach((student, index) => {
      if (student.name === name) {
        let updatedStudent = { ...this.state.students[index] };
        if (result === "pass") {
          updatedStudent.repeats = 0;
          updatedStudent.block++;
          updatedBlockData[block - 1].passes++;
        } else {
          updatedStudent.repeats++;
          updatedBlockData[block - 1].fails++;
        }
        let updatedStudentList = [...this.state.students];
        updatedStudentList[index] = updatedStudent;
        this.setState({
          students: updatedStudentList,
          block_data: updatedBlockData
        });
      }
    });
  };
}
