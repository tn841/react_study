import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            (todos, onToggle, onRemove) => {
                return (
                    <TodoItem 
                        id={todos.id}
                        text={todos.text}
                        checked={todos.checked}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        key={todos.id}
                    ></TodoItem>
                );
            }
        );
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;