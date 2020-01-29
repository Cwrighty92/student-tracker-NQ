import React, { Component } from "react";
import "../App.css";

const Blocks = props => {
  let studentsInBlock = props.students.filter(
    student =>
      student.block == props.block && student.course_status === "current"
  );
  let blockData = props.blockDatas.filter(
    block => block.block === +props.block
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
                      props.changeReviewStatus(
                        student.name,
                        props.block,
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
                      props.changeReviewStatus(
                        student.name,
                        props.block,
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
};

export default Blocks;
