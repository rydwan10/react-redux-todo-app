import React from 'react';

import TodoItem from './TodoItem';

function TodoList(props) {

    function filteredTodos() {
        if (props.filter === 'all') {
            return props.todos
        } else if (props.filter === 'completed') {
            return props.todos.filter(todo => todo.completed === true)
        } else if (props.filter === 'not-completed') {
            return props.todos.filter(todo => todo.completed === false)
        }
    }


    function countNotCompleted() {
        return props.todos.filter(todo => todo.completed === false).length;
    }

    function countCompleted() {
        return props.todos.filter(todo => todo.completed === true).length;
    }

    return (
        props.todos.length > 0 ? (
            <>
                <div className="todo-list">
                    {filteredTodos().map(todo => {
                        return (
                            <TodoItem onRemoveTodo={props.onRemoveTodo} onToggleTodoDone={props.onToggleTodoDone} key={todo.id} todo={todo} />
                        )
                    })}
                </div>
                <div className="counter-wrapper">
                    <div className="counter">
                        <span className="todo-left">Todo(s) left: {countNotCompleted()}</span>
                        <span className="todo-completed">Todo(s) completed: {countCompleted()}</span>
                        <span className="todo-total">Total: {props.todos.length}</span>
                    </div>
                </div>
            </>
        ) : (<div>Welp... wanna do something?</div>)

    )
}


export default TodoList;