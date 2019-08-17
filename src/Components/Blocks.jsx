import React, { Component } from "react";
import "../App.css";

class Blocks extends Component {
  render() {
    let studentsInBlock = this.props.students.filter(
      student =>
        student.block == this.props.block && student.course_status === "current"
    );
    let blockData = this.props.block_data.filter(
      block => block.block === +this.props.block
    )[0];
    let passPercentage = Math.floor(
      (blockData.passes / (blockData.passes + blockData.fails)) * 100
    );

    return (
      <div>
        <p>Pass rate: {!passPercentage ? "TBD" : `${passPercentage}%`}</p>
        <p>Students: {studentsInBlock.length}</p>
        {studentsInBlock.map(student => {
          let classNameSetter = "student-card";
          student.repeats === 0
            ? (classNameSetter += " safe")
            : student.repeats === 1
            ? (classNameSetter += " caution")
            : (classNameSetter += " danger");
          return (
            <div className={classNameSetter}>
              <p>{student.name}</p>

              <p>
                Block status:
                <span>
                  <form>
                    <input
                      type="radio"
                      name="review"
                      value="pass"
                      onClick={() =>
                        this.props.changeReviewStatus(
                          student.name,
                          this.props.block,
                          "pass"
                        )
                      }
                    />
                    Pass
                    <input
                      type="radio"
                      name="review"
                      value="fail"
                      onClick={() =>
                        this.props.changeReviewStatus(
                          student.name,
                          this.props.block,
                          "fail"
                        )
                      }
                    />
                    Fail
                  </form>
                </span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Blocks;
