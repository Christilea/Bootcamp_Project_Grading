import React from 'react'

export default function NewGrade(props) {
    return (
        <div>
            Enter a new project
            <form onSubmit={props.submit}>
                <label htmlFor="projTitle">Project Title</label>
                <input onChange={props.newTitle} id="projTitle" placeholder="Project Title"/>
                <label htmlFor="dueDate">Due Date</label>
                <input onChange={props.dueDateChange} id="dueDate" type="date" />
                <label htmlFor="groupSize">Group Size</label>
                <input onChange={props.groupSize} id="groupSize" type="number" min="1" placeholder="2"/>
                <label htmlFor="gradeCalc">Numerical grade</label>
                <input onChange={props.gradeChange} id="gradeCalc" type="number" min="0" max="100" placeholder="0-100" />
                <input type="submit"/>
            </form>
        </div>
    )
}