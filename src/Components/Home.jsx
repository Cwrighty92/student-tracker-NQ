import React, { useState } from "react";
import { blockData } from "./appData";
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

export const Home = () => {
  const [students, updateStudents] = useState([]);
  const [blockDatas, updateBlockData] = useState(blockData);

  const createStudent = (fname, lname) => {
    if (fname && lname) {
      const newStudent = {
        name: `${fname} ${lname}`,
        cohort: 17,
        end_date: "tbc",
        block: 1,
        block_review: "pending",
        repeats: 0,
        course_status: "current"
      };

      const newStudents = [...students, newStudent];

      updateStudents(newStudents);
    }
  };

  const changeReviewStatus = (name, block, result) => {
    let updatedBlockData = [...blockDatas];
    students.forEach((student, index) => {
      if (student.name === name) {
        const updatedStudent = { ...students[index] };
        if (result === "pass") {
          updatedStudent.repeats = 0;
          updatedStudent.block++;
          updatedBlockData[block - 1].passes++;
        } else {
          updatedStudent.repeats++;
          updatedBlockData[block - 1].fails++;
        }
        const updatedStudentList = [...students];
        updatedStudentList[index] = updatedStudent;

        updateStudents(updatedStudentList);
        updateBlockData(updatedBlockData);
      }
    });
  };

  return (
    <div className="app-window">
      <StudentView createStudent={createStudent} />
      <div className="block-container">
        {blocks.map((block, index) => (
          <div className="block-item" key={`${index}${block}`}>
            <h1>{block}</h1>
            <Blocks
              students={students}
              block={String(index + 1)}
              blockDatas={blockDatas}
              changeReviewStatus={changeReviewStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
