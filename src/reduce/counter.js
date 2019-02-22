import { combineReducers } from 'redux'
import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
} from '../action/actionType'

// const INITIAL_STATE_TODO = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default:
            return state;
    }
}

export const reducers = combineReducers({
    visibilityFilter,
    todos
})