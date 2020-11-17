import React from 'react'


function TodoItem(props) {

    function handleCheckChanged(e, id) {
        console.log(e.target.checked, id);
        props.onToggleTodoDone({ id, toggle: e.target.checked })
    }

    return (
        <div className="todo-item" key={props.todo.id}>
            <input checked={props.todo.completed} onChange={(e) => handleCheckChanged(e, props.todo.id)} type="checkbox" name="check-done" id="check-done" />
            <div className={props.todo.completed ? 'completed todo-title' : 'todo-title'}>
                <p>{props.todo.title}</p>
            </div>
            <button onClick={() => props.onRemoveTodo(props.todo.id)} className="delete-button">X</button>
        </div>
    )

}

export default TodoItem
