/*
    https://redux.js.org/basics/actions
    Actions are payloads of information that send data from your application 
    to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
*/
export const ADD_TODO = 'ADD_TODO';    // a action type
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }
// action type을 별도의 파일로 관리하는 것은 선택사항이다.
// 그러나 큰 프로젝트에서는 분리하는 것이 깔끔


// Action Creators
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
return { type: SET_VISIBILITY_FILTER, filter }
}