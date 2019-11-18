import React from 'react';
import PropTypes from 'prop-types';


// 클래스 형식 대신 함수형 컴포넌트 생성
const Todo = (props) => {
    const { onClick, completed, text } = props;
    return (
        <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            {text}
        </li>
    );
};

Todo.propTypes = { // ???
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;