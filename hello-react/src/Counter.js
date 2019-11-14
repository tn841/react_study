import React, { Component } from 'react';

class Counter extends Component {
    /* 
        constructor와 class fields를 동시에 사용하면, 
        class fields가 먼저 실행된다.
     */
    constructor(props){
        super(props);
        // this.state = {
        //     number: 0
        // }
    }

    /*
        constructor를 구현하지 않고 바로 state를 설정하는 문법을
        class fields 문법이라 한다.
    */
    state = {
        number : 0
    }

    /* 메소드 작성 
        - arrow function 형태로 작성해야.
          함수 내부에서 사용하는 this가
          클래스의 맴버 변수를 지칭하게된다.

          익명함수로 작성하면,
          constructor에서 명시적으로 bind해줘야한다.
          ex) this.handelIncrease = this.handelIncrease.bind(this);
    */
    handelIncrease = () => {    
        /*
            this.setState 함수 사용
            - react는 setState함수가 호출되면
                rerendering 된다.
            - 인자로 전달되는 객체의 값으로 업데이트 된다.
            - 객체 깊숙한 곳 까지 확인하지 못함.
            - 복잡한 객체에서 특정 값만 바꿀경우, 
              기존 값은 전개연산자 "..."로 적어준다.
            - immutable.js 를 사용하여 간단하게 가능하다.

            - 객체 대신 함수 전달 : 
        */

        /*
        this.setState({
            number: this.state.number+1
        });
        */
        const {number} = this.state;
        this.setState({
            number: number + 1
        })
    }

    handelDecrease = () => {
        /*
        this.setState({
            number: this.state.number -1
        });
        */

        /*
        this.setState(
            (state) => ({
                number: state.number+1
            })
        );
        */
        
        this.setState(
            /* 비구조화 할당 destructuring assingment*/
            ({number}) => ({
                number: number - 1
            })
        );
        
        /*
        const {number} = this.state;
        this.setState({
            number: number+1
        });
        */
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number} </div>
                {/* 이벤트이름은 camelCase로, 전달하는 값은 함수여야한다. */}
                <button onClick={this.handelIncrease}>+</button>
                <button onClick={this.handelDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;