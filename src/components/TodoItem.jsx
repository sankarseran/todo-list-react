import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    todo = this.props.todo;
    listStyle = () => {
        return {
            backgroundColor: 'rgb(207, 207, 207)',
            padding: '15px',
            textDecoration: this.todo.status ? 'line-through' : 'none',
            borderBottom: '1px dotted #c7c7c7'
        }
    };

    onChange = (e) => {
        this.props.checkAsMarked(this.todo.id, e.target.checked)};

    render() {
        const {id, title, status} = this.props.todo;
        return (
            <div style={this.listStyle()}>
                <p>
                    <input style={{marginRight: '5px'}} checked={status} type="checkBox" onChange={this.onChange} />
                    {title}
                    <button style={removeBtn} onClick={this.props.removeTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// styles
const removeBtn = {
    float: 'right',
    borderRadius: '50%',
    padding: '1px 4px',
    cursor: 'pointer',
    color: '#fff',
    background: '#e10600',
    borderColor: '#e10600',
}

export default TodoItem;
