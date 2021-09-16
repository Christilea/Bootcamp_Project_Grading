import React from "react";
import Grade from "../components/Grade";
import '../styles/gradebook.css'

export default function Gradebook(props) {
return (
    <div>
    <h1 className="hi">Gradebook</h1>
    <div className="gradebook">
    {props.projects.map(project => {
        return <Grade project={project}/>
    })}
    </div>
    </div>
);
}