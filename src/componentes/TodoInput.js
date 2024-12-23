import React, {useState} from "react"

function TodoInput({addTask}) {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        if(task.trim()) {
            addTask(task);
            setTask(""); //Limpia la entrada
        }
    };

    return(
        <div className="todo-input">
            <input
                type="text"
                placeholder="Escribe una tarea ..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAdd}> Añadir </button>
        </div>
    );
}

export default TodoInput;
