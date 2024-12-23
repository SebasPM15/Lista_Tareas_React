import React from "react"
import TodoItem from "./TodoItem"

function TodoList({tasks, removeTask, editTask, startEditing}){
    return(
        <ul>
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task}
                    index = {index}
                    removeTask={removeTask}
                    editTask={editTask}
                    startEditing={startEditing}
                />
            ))}
        </ul>
    );
}

export default TodoList;