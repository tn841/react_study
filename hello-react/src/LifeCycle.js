import React, { Component } from 'react'

/*
1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()
*/

class LifeCycel extends Component{
    /* 컴포넌트 초기 생성 API */
    constructor(props){
        super(props);
        this.state = {
            favoritecolor: 'red'
        }
    }

    /* 컴포넌트 업데이트 */
    static getDerivedStateFromProps(props, state) {
        /*
            The getDerivedStateFromProps() method is called 
            right before rendering the element(s) in the DOM. 

            It takes state as an argument, 
            and returns an object with changes to the state.
         */
        return { favoritecolor: props.favcol };
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* 기본적으로 true를 반환, 
            특정 조건에서 false를 반환하게 하면 render()를 수행하지 않음
        */
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /* 이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생하게 됩니다. */
    }

    /* 컴포넌트 제거 */
    componentWillUnmount() {
        /*
            이벤트 제거
            timer 제거
            외부라이브러리 dispose
        */
    }

    /* 컴포넌트 에러 처리 */
    componentDidCatch(err, info){
        this.setState({
            error: true
        })
    }
}