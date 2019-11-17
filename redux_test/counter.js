console.log('counter.js');

const eleNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

// 리덕스 액션 타입 정의
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 액션 객체를 만들어주는 액션 생성 함수
const increment = (diff) => ({type: INCREMENT, diff: diff});
const decrement = () => ({type: DECREMENT});

// state 초기값 설정
const initialState = {
    number: 0
};

/*
    이제 부터 리듀서 함수
    state와 action을 파라미터로 받는다.
    파라미터에 따른 다음 상태를 전의한 다음 반환해준다.
*/
const counter = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case INCREMENT:
            return {
                number: state.number + action.diff
            };
        case DECREMENT: 
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

// 리덕스 스토어 객체 생성
const { createStore } = Redux;
const store = createStore(counter); //리듀서 전달

// 상태변경 시 호출하는 listener함수
const render = () => {
    eleNumber.innerText = store.getState().number;
    console.log('listener함수 실행 됨.');
}

// 스토어에 구독을 하고, 변화가 있다면 render 함수 실행
store.subscribe(render);

// 초기랜더링
render();

// 버튼에 이벤트 처리
// 스토어에 변화를 일으킬 때는 dispatch함수에 액션 객체를 넣어 호출한다.
btnIncrement.addEventListener('click', () => {
    store.dispatch(increment(25));
});

btnDecrement.addEventListener('click', () => {
    store.dispatch(decrement());
});


