import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import grades from "../data/fakegrades";
import letterConverter from "../data/gradeConverter";

export default function Project(props) {
    const { project } = useParams();
    const projInfo = props.projects.filter((proj) => {
        return proj.id === project;
    });
    const change = (event) => {
        event.preventDefault()
    }
    const changeGrade = (event) => {
        event.preventDefault()
        setGradeScore(event.target.value)
    }
    const [gradeScore, setGradeScore] = useState(projInfo[0].gradeCalc)
return (
    <div>
    <h1 className="header">
        On any normal application, the user would be able to edit these and
        update the gradebook accordingly. Since there is no backend, the
        simulation ends here, with all fields editable.
    </h1>
    <div className="projectDiv">
        <h2>Title: <input type="text" onChange={change} defaultValue={projInfo[0].projTitle} /></h2>
        
        {/* <h4>Requirements</h4> */}
        <h4>Due:<input type="date" onChange={change} defaultValue={projInfo[0].dueDate} /></h4>
        {/* <h4>Categories:</h4> */}
        <h4>Group size: <input type="number" onChange={change} defaultValue={projInfo[0].groupSize} /></h4>
        {/* <h4>Group Score:</h4>
    <h4>Member Scores:</h4>
    <h4>Links:</h4>
      <h4>Comments:</h4> */}
        <h4>Score: <input type="number" onChange={changeGrade} defaultValue={projInfo[0].gradeCalc} /></h4>
        <h4>Letter: {letterConverter(gradeScore)}</h4>
    <button><Link to="/gradebook">Save (doesn't actually save)</Link></button>
    </div>
    </div>
);
}