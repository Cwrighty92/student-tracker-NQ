import React, { Component } from "react";
import "./App.css";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Graduates from "./Components/Graduates";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  state = {
    currentCohort: 17,
    block_data: [
      {
        block: 1,
        passes: 0,
        fails: 0
      },
      {
        block: 2,
        passes: 0,
        fails: 0
      },
      {
        block: 3,
        passes: 0,
        fails: 0
      },
      {
        block: 4,
        passes: 0,
        fails: 0
      },
      {
        block: 5,
        passes: 0,
        fails: 0
      },
      {
        block: 6,
        passes: 0,
        fails: 0
      }
    ],
    students: [
      {
        id: 1,
        name: "Amul Batra",
        cohort: 1,
        weeks_to_completion: 12,
        block: 7,
        block_review: "",
        repeats: 0,
        course_status: "current"
      },
      {
        id: 2,
        name: "Joris Bohnson",
        cohort: 1,
        weeks_to_completion: 16,
        block: 7,
        block_review: "",
        repeats: 1,
        course_status: "current"
      },
      {
        id: 3,
        name: "Agnieska Romanova",
        cohort: 1,
        weeks_to_completion: 20,
        block: 1,
        block_review: "",
        repeats: 2,
        course_status: "current"
      },
      {
        id: 4,
        name: "Jonathan Piebarm",
        cohort: 2,
        weeks_to_completion: 12,
        block: 4,
        block_review: "",
        repeats: 1,
        course_status: "current"
      }
    ]
  };

  render() {
    const activeStyle = { color: "gold" };
    return (
      <div>
        <div className="nav-bar">
          <NavLink activeStyle={activeStyle} exact to="/">
            Home
          </NavLink>
          <NavLink activeStyle={activeStyle} to="/graduates">
            Graduates
          </NavLink>
        </div>

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
          <Route
            path="/graduates"
            // component={Graduates}
            render={() => (
              <Graduates
                students={this.state.students.filter(
                  student => student.block === 7
                )}
              />
            )}
          />
        </Switch>
      </div>
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
      let addedStudents = [...this.state.students, newStudent];
      this.setState({
        students: addedStudents
      });
    }
  };

  changeReviewStatus = (name, block, result) => {
    let indexHelper = 0;
    let updatedBlockData = [...this.state.block_data];
    this.state.students.forEach((student, index) => {
      if (student.name === name) {
        indexHelper = index;
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
        updatedStudentList[indexHelper] = updatedStudent;
        this.setState({
          students: updatedStudentList,
          block_data: updatedBlockData
        });
      }
    });
  };
}

export default App;
