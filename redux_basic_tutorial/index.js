/* 
    Store (https://redux.js.org/basics/store)
    - action을 정의하였고 각 action에 따라 state를 처리하는 reducer를 정의하였다.
    - Store는 action과 reducer를 하나로 묶는 객체이다.

    - Store의 역할
        1. App의 State를 Hold한다.
        2. getState() 으로 state에 접근
        3. dispatch(action) 으로 state 갱신
        4. subscribe(listener) 로 listener 등록
        5. subscribe(listener) 로 반환되는 함수를 통해 listener 해제        

    - Store는 app에 하나만 존재한다.
        : 다양한 data 처리를 하고 싶다면, Store를 여러개 만드는 것이 아니라
          reducer composition을 통해 구현해야한다.
*/

// Create Store
import { createStore } from 'redux';
import todoApp from './reducer';

const store = createStore(todoApp);


// Dispatching Actions
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

console.log(store.getState());

// State가 바뀔때마다 logging
// subscribe()가 listener 를 해제시키기 위해 특정 함수를 반환하고 있다.
const unsubscribe = store.subscribe(() => console.log(store.getState()));


// action에 대한 dispatch 처리
store.dispatch(addTodo('todo 1'));
store.dispatch(addTodo('todo 2'));
store.dispatch(addTodo('todo 3'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))


// listener 해제하기
unsubscribe();


