// 리듀서 모듈이 여러개일 때, rootReducer 생성!

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import inVisibleReducer from './isVisibleReducer';

// #5. 통합 리듀서 생성!
// [여러개의 리듀서]
// - 여러 리듀서의 결합을 위해 combineReducers 메서드 사용
//   ㄴ 여러 개의 리듀서를 하나로 결합

const rootReducer = combineReducers({
  counter: counterReducer, // counter 상태를 관리하는 리듀서
  isVisible: inVisibleReducer, // isVisible 상태를 관리하는 리듀서
});
// 각 리듀서가 관리하는 상태가 "키"를 기준으로 분리됨

export default rootReducer;
