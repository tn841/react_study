/**
 * https://redux.js.org/basics/reducers
 * 리듀서는 store로 전송된 action에 대한 응답으로 app이 어떻게 
 * 변화되야 하는지 정의하는 함수이다.
 */

// 1. Designing the state shape
// 먼저, 우리가 만들고자 하는 todo 앱이 가지는 state를 구상해보자
//  {
//      visibilityFilter: 'SHOW_ALL',
//      todos: [
//          {
//             text: 'todo1',
//             completed: true
//          },
//          {
//              text: 'todo2',
//              completed: false
//          }
//      ]
//  }

// 2. Action Handling 
// state 구조에 따른 reducer 함수를 작성한다.
// (prevState, action) => new nextState
// reducer는 순수함수 여야한다. 
//  : 파라미터가 바뀌면 반환값이 바뀌고, 같은 파라미터에 대해서 항상 같은 값을 반환
// radom()이나 비동기 처리같은 것은 별도로 처리해줘야한다.
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;

const initState = {
    VisibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index){
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default :
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;        
    }
}

// function todoApp(state = {}, action){
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;