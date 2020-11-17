import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

import { v4 as uuidv4 } from 'uuid';

import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import TodoUtility from '../components/TodoUtility';
import '../App.css';

function TodoApp(props) {

    function formSubmitted(event) {
        event.preventDefault();
        props.onAddTodo({
            id: uuidv4(),
            title: props.newTodo,
            completed: false
        });
        props.onNewTodoChanged('');
    }

    return (
        <div className="App">
            <div className="App-header">
                <h4 className="App-title">{props.message}</h4>
                <AddTodoForm formSubmitted={formSubmitted} newTodo={props.newTodo} onNewTodoChanged={props.onNewTodoChanged} />
                <TodoUtility
                    todos={props.todos}
                    onAllDone={props.onAllDone}
                    onRemoveSelected={props.onRemoveSelected}
                    onRemoveAll={props.onRemoveAll}
                    onChangeFilter={props.onChangeFilter}
                />
                <TodoList
                    onRemoveTodo={props.onRemoveTodo}
                    onToggleTodoDone={props.onToggleTodoDone}
                    todos={props.todos}
                    filter={props.filter}
                />
            </div>
        </div>
    )


}


function mapStateToProps(state) {
    return {
        message: state.message,
        newTodo: state.newTodo,
        todos: state.todos,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onNewTodoChanged(newTodo) {
            dispatch(actions.newTodoChanged(newTodo));
        },
        onAddTodo(todo) {
            dispatch(actions.addTodo(todo));
        },
        onToggleTodoDone(payload) {
            dispatch(actions.toggleTodoDone(payload));
        },
        onRemoveTodo(id) {
            dispatch(actions.removeTodo(id));
        },
        onAllDone() {
            dispatch(actions.allDone());
        },
        onRemoveSelected() {
            dispatch(actions.removeSelected());
        },
        onRemoveAll() {
            dispatch(actions.removeAll());
        },
        onChangeFilter(filterType) {
            dispatch(actions.changeFilter(filterType));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
