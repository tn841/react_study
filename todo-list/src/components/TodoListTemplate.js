import React from 'react';
import './TodoListTemplate.css';
import Palette from './Palette';

/*
    - 함수형 컴포넌트
    - 인자는 props이다.
    - props를 비구조화할당 (destructured assigned) 하여
      아래와 같이 ({form, children}) 받았다.
 */
const TodoListTemplate = ({form, children, onPaletteChange, checkedColor}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                <Palette onPaletteChange={onPaletteChange} checkedColor={checkedColor}/>
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;