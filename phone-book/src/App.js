import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoLIst from './components/PhoneInfoList';

class App extends Component{
  id = 2; //랜더링 해주는 값이아니면 굳이 state로 관리할 필요 없음
  state = {
    information : [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동2',
        phone: '010-0000-0001'
      }
    ],
    keyward: ''
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data
      })
    });
    console.log(data);
  };

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id != id)
      /*
        const aa = [1, 2, 3];
        const bb = aa.filter(num => num != 2);
      */
    });
  }

  handleEdit = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        (info) => info.id === id 
        ? {...info, name:data.name, phone:data.phone} //
        : info
        )
    });
  }

  handleKeywardChange = (e) => {
    const { information } = this.state;
    this.setState({
        ...information,
        keyward: e.target.value
    });
    // console.log(e.target.value);
  }

  render() {
    const { information } = this.state; 
    const filteredList = information.filter(
      (info) => info.name.indexOf(this.state.keyward) > -1
    )

    return(
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요."
            onChange={this.handleKeywardChange}
            value={this.state.keyward}
          />
        </p>
        <PhoneInfoLIst
          data={filteredList}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
      </div>
    )
  }
}

export default App;
