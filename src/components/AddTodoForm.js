import React from 'react'

function AddTodoForm(props) {
    return (
        <form onSubmit={props.formSubmitted}>
            <input autoFocus={true}
                autoComplete="false"
                type="text"
                name="title"
                id="title"
                value={props.newTodo}
                onChange={(event) => props.onNewTodoChanged(event.target.value)} />
        </form>
    )
}

export default AddTodoForm
