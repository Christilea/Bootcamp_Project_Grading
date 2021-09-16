import React from "react";
import { Link } from "react-router-dom";
import letterConverter from "../data/gradeConverter";
import '../styles/grades.css'

export default function Grade(props) {
const project = props.project;
return (
    <div className="gradeDiv">
    <h2>Title: <Link to={`/project/${project.id}`}>{project.projTitle}</Link></h2>
      {/* <h4>Requirements</h4> */}
    <h4>Due: {project.dueDate}</h4>
      {/* <h4>Categories:</h4> */}
    <h4>Group size: {project.groupSize}</h4>
    {/* <h4>Group Score:</h4>
    <h4>Member Scores:</h4>
    <h4>Links:</h4>
      <h4>Comments:</h4> */}
    <h4>Score: {project.gradeCalc}</h4>
    <h4>Letter: {letterConverter(project.gradeCalc)}</h4>
    </div>
);
}