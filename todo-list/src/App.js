import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos : [
      { id:0, text: ' 할일 1', checked: false,  color: '#343a40'},
      { id:1, text: ' 할일 2', checked: true,   color: '#343a40'},
      { id:2, text: ' 할일 3', checked: false,  color: '#343a40'}
    ],
    checkedColor : '#343a40',
    todo_deleted : []
  }

  // 상태와 관련하여 구현되어야할 핸들러들
  // 1. input 내용이 바뀔 때
  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  // 2. 새로운 todo를 등록 할 때
  handleTodoCreate = () => {
    const {input, todos, checkedColor} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id ++,
        text: input,
        checked: false,
        color: checkedColor
      }),
    });
  };

  // 3. input박스에서 enter키를 누를 때
  handleEnterPress = (e) => {
    if(e.key == 'Enter'){
      this.handleTodoCreate();
    }
  };

  // 4. todo의 체크 상태 관리
  handleTodoToggle = (id) => {
    const  {todos} =  this.state;
    const index = todos.findIndex( (todo) => {
      return todo.id === id;
    } )
    const selected_todo = todos[index];
    const nextTodo = [...todos];

    nextTodo[index] = {
      ...selected_todo,
      checked: !selected_todo.checked
    };
    this.setState({
      todos: nextTodo
    });
  };

  // 5.todo 제거
  handleTodoRemove = (id) => {
    if(window.confirm("삭제하시겠습니까?")){
      const {todos, todo_deleted}  = this.state;
      // this.state.todo_deleted.concat()
      const del_todo = todos.filter( (todo)=> {return todo.id === id});  

      const nextTodo2 = todos.filter( (todo)=> {return todo.id !== id});
      this.setState({
        todos: nextTodo2,
        todo_deleted: todo_deleted.concat(del_todo) 
      });
    }
    
  };

  // 6.palette 선택
  handlePaletteChange = (color) => {
    this.setState({
      checkedColor: color
    });
  };

  render () {
    const { input, todos, checkedColor } = this.state;

    return (
      <TodoListTemplate 
        onPaletteChange={this.handlePaletteChange}
        checkedColor={checkedColor}
        form={(
          <Form
            value={input}
            onKeyPress={this.handleEnterPress}
            onChange={this.handleInputChange}
            onCreate={this.handleTodoCreate}
          />
        )}>
        <TodoItemList 
          todos={todos} 
          onToggle={this.handleTodoToggle}
          onRemove={this.handleTodoRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
