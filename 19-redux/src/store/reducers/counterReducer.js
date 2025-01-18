// ** toolkit 사용하지 않은 버전 (전통 Redux 설정 방식)
// 리듀서 작성
// - 상태를 어떻게 관리할지 정의

// (!) 액션 타입 가져오기
import { PLUS, MINUS } from '../actions/counterAction';

// #1. state 초기값 정의
const initialState = {
  count: 100, // 초기 count 값 설정
};

// #2. 리듀서 작성 (상태, 액션)
const counterReducer = (state = initialState, action) => {
  // action 객체: {type: "XXX", payload: ?}
  switch (action.type) {
    case PLUS:
      return { ...state, count: state.count + 1 };
    case MINUS:
      return { ...state, count: state.count - 1 };
    default:
      return state; // 기본 상태 반환 (기본값)
  }
};

export default counterReducer; // 리듀서 내보내기
