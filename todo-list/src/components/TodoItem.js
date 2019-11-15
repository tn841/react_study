import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // todo의 값이 바뀔때만, ture를 반환하여 랜더링한다.
        return this.props.checked !== nextProps.checked;
    }

    render () {
        const {text, checked, id, onToggle, onRemove, color } = this.props;
        return (
            <div className="todo-item" onClick={ () => onToggle(id)}>
                <div className="remove" onClick={(e)=> {
                    e.stopPropagation();
                    onRemove(id);
                }}>
                    &times;
                </div>
                <div className={`todo-text ${checked ? ' checked': ''}`}>
                    <div style={{ color: (color) ? color : 'black' }}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    };
};

export default TodoItem;