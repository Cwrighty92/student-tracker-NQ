import React, { Component } from "react";
import "../App.css";

class Blocks extends Component {
  render() {
    let classNameSetter = "student-card";
    let studentsInBlock = this.props.students.filter(
      student =>
        student.block === this.props.block &&
        student.course_status === "current"
    );
    return (
      <div>
        <p>Students: {studentsInBlock.length}</p>
        {studentsInBlock.map(student => {
          student.repeats === 0
            ? (classNameSetter += " safe")
            : student.repeats === 1
              ? (classNameSetter += " caution")
              : (classNameSetter += " danger");
          return (
            <div className={classNameSetter}>
              <p>{student.name}</p>
              <p>{student.block}</p>
              <p>Block status: {student.block_review}</p>
              <p>Repeats: {student.repeats}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Blocks;
