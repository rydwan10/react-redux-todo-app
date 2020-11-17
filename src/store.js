import { v4 as uuidv4 } from 'uuid';

const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
const REMOVE_TODO = 'REMOVE_TODO';
const ALL_DONE = 'ALL_DONE';
const REMOVE_SELECTED = 'REMOVE_SELECTED';
const REMOVE_ALL = 'REMOVE_ALL';
const CHANGE_FILTER = 'CHANGE_FILTER';

const initialState = {
    message: 'Hi, what\'s next to be done?',
    newTodo: '',
    todos: [
        { id: uuidv4(), title: 'make something with react', completed: false },
        { id: uuidv4(), title: 'another list from todos', completed: false },
        { id: uuidv4(), title: 'this is another todo', completed: true },
    ],
    filter: 'all'
}

export const actions = {
    newTodoChanged(newTodo) {
        return {
            type: NEW_TODO_CHANGED,
            newTodo
        }
    },
    addTodo(todo) {
        return {
            type: ADD_TODO,
            todo
        }
    },
    toggleTodoDone(payload) {
        return {
            type: TOGGLE_TODO_DONE,
            payload
        }
    },
    removeTodo(id) {
        return {
            type: REMOVE_TODO,
            id
        }
    },
    allDone() {
        return {
            type: ALL_DONE
        }
    },
    removeSelected() {
        return {
            type: REMOVE_SELECTED
        }
    },
    removeAll() {
        return {
            type: REMOVE_ALL
        }
    },
    changeFilter(filterType) {
        return {
            type: CHANGE_FILTER,
            filterType
        }
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_TODO_CHANGED: {
            return {
                ...state,
                newTodo: action.newTodo
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
        case TOGGLE_TODO_DONE: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: action.payload.toggle }
                    }
                    return todo
                })
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.id
                })
            }
        }
        case ALL_DONE: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return { ...todo, completed: !todo.completed }
                })
            }
        }
        case REMOVE_SELECTED: {
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.completed === false
                })
            }
        }
        case REMOVE_ALL: {
            return {
                ...state,
                todos: []
            }
        }
        case CHANGE_FILTER: {
            return {
                ...state,
                filter: action.filterType
            }
        }
        default:
            return state;
    }
}