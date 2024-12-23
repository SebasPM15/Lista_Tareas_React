import React, {useState} from "react";

function TodoItem ({task, index, removeTask, editTask, startEditing}) {
    const [editedText, setEditedText] = useState(task.text);
    
    const handleEditChange = (e) => {
        setEditedText(e.target.value);
    };
    
    const handleEditSubmit = () => {
        if(editedText.trim()) {
            editTask(index, editedText);
        }
    };

    return(
        <div className="todo-item">
            {task.isEditing ? (
                <div className="editing">
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleEditChange}
                        onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
                    />
                    <button onClick={handleEditSubmit}>Guardar</button>
                </div>
            ) : (
                <div className="task-text">
                    <span>{task.text}</span>
                    <button onClick={() => startEditing(index)}>Editar</button>
                    <button onClick={() => removeTask(index)}>Eliminar</button>
                </div>
            )}
        </div>
    );
}

export default TodoItem;