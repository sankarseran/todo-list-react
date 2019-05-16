import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.jsx';

export class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} checkAsMarked={this.props.checkAsMarked} 
        removeTodo={this.props.removeTodo} /> );
    }
}
// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
