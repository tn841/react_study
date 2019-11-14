import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos : [
      { id:0, text: ' 할일 1', checked: false},
      { id:1, text: ' 할일 2', checked: true},
      { id:2, text: ' 할일 3', checked: false}
    ]
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
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id ++,
        text: input,
        checked: false
      })
    });
  };

  // 3. input박스에서 enter키를 누를 때
  handleEnterPress = (e) => {
    if(e.key == 'Enter'){
      this.handleTodoCreate();
    }
  };

  render () {
    const { input, todos } = this.state;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={this.handleEnterPress}
          onChange={this.handleInputChange}
          onCreate={this.handleTodoCreate}
        />
      )}>
        <TodoItemList todos={todos}></TodoItemList>
      </TodoListTemplate>
    );
  }
}

export default App;
