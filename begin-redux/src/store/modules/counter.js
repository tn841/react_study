import { createAction, handleActions } from "redux-actions";

// 카운터 관련 상태 로직

// 액션 타입 정의
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성 함수
// export const increment = () => ({type: INCREMENT});
// export const decrement = () => ({type: DECREMENT});
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태
const initialState = {
    number: 0
};

// 리듀서를 만들어 export
// export default function reducer(state = initialState, action) {
//     switch(action.type) {
//         case INCREMENT:
//             return {
//                 number: state.number + 1
//             };
//         case DECREMENT:
//             return {
//                 number: state.number - 1
//             };
//         default:
//             return state;
//     }
// }

export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    [DECREMENT]: ({number}) => ({number: number -1})
}, initialState);