import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{

    shouldComponentUpdate(nextProps, nextStates) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            (todos) => {
                return (
                    <TodoItem 
                        id={todos.id}
                        text={todos.text}
                        checked={todos.checked}
                        //위 3개 속성은 전개연산자로 대체 가능
                        // {...todos}

                        onToggle={onToggle}
                        onRemove={onRemove}
                        key={todos.id}
                        color={todos.color}
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