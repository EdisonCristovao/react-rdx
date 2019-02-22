import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addTodo } from '../action/actionType'
import { toggleTodo } from '../action/actionType';

const Item = ({ todos, text, onTodoClick }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (<span> {todo.text}<br /></span> )
            })}
            <button onClick={() => onTodoClick(text)}>Uma msg</button>
        </div>
    )
}

Item.propTypes = {
    text: PropTypes.string.isRequired
}

// Item.defaultProps = {
//     text: 'Um texto loco'
// }
const mapStateToProps = state => {
    console.log(state, "<---");
    return { todos: state.todos };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (text) => {
            return dispatch(addTodo(text))
            // dispatch(toggleTodo(id))
        }
    }
}

const ItemCone = connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);

export default ItemCone;