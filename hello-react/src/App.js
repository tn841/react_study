import React, { Component } from "react";
import MyName from './MyName';
import YourName from './YourName';
import Counter from './Counter';

class App extends Component{
  render() {
    return (
      <div>
        <MyName/>
        <YourName></YourName>
        <Counter/>
      </div>
    )
  }
}


export default App;
