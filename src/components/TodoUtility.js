import React from 'react'

function TodoUtility(props) {

    function todoCompleted() {
        return props.todos.filter(todo => todo.completed).length;
    }

    function countTodo() {
        return props.todos.length
    }

    // console.log(todoCompleted());

    return (
        <div className="todo-utility-wrapper">
            {countTodo() > 0 &&
                <>
                    <div className="__filter-wrapper">
                        <span className="filter-title">Filter: </span>
                        <select onChange={(e) => props.onChangeFilter(e.target.value)} defaultValue={'all'} className="filter-todo" name="filter" id="filter">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="not-completed">Not Complete</option>
                        </select>
                    </div>

                    <div className="__button-wrapper">
                        {todoCompleted() > 0 ? <button onClick={props.onRemoveSelected} className="delete-selected-button">Delete Seletected</button> : <span></span>}
                        <div>
                            <button onClick={props.onAllDone} className="check-all-button">Check All</button>
                            <button onClick={props.onRemoveAll} className="delete-all-button">Delete All</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default TodoUtility
