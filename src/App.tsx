import React, {FC, ChangeEvent, useState} from "react"
import "./App.css"
import { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
    const [task, setTask] = useState<string>(""); 
    const [duration, setDuration] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name == "task") {
            setTask(event.target.value);
        }
        else {
            setDuration(Number(event.target.value));
        }
    }

    const addTask = (): void => {
        const newTask = {taskName: task, duration: duration};
        setTodoList([...todoList, newTask]);
        setTask("");
        setDuration(0);
        console.log(todoList);
    }

    const completeTask = (taskNameToDelete: string): void => {
        
    }
    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <div className="inputAlign">
                        <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
                        <input type="number" placeholder="Duration" name="duration" value={duration} onChange={handleChange}/>
                    </div>
                </div>
                <div><button type="button" onClick={addTask}>Add Task</button></div>
            </div>
            <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task}/>
                })}
            </div>
        </div>
    )
}

export default App;