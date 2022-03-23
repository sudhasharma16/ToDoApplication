import React from "react"
import {ITask} from "../Interfaces"
import "../App.css"

interface Props {
    task: ITask;
    completeTask(taskToBeDeleted: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.duration}</span>
            </div>
            <button onClick={() => {
                completeTask(task.taskName)
            }}>X</button>
        </div>
    )
}

export default TodoTask;