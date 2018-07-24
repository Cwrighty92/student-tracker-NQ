import React, { Component } from "react";
import "../App.css";

class Graduates extends Component {
  render() {
    console.log(this.props.students);
    return (
      <div>
        {this.props.students.map(student => (
          <div class="student-card safe">{student.name}</div>
        ))}
      </div>
    );
  }
}

export default Graduates;
