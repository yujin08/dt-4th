// #3. 액션 타입 상수 정의
// - 액션 객체의 'type' 값을 상수 변수로 정의하는 것
// - 코드의 가독성을 높이고, 네임스페이스를 명확하게 구분하여 이름 충돌을 방지하기 위해서

export const PLUS = 'counter/PLUS'; // counter는 namespace용일뿐
export const MINUS = 'counter/MINUS';

/**
 *
 * namespace란?
 * - 액션 타입 이름에 모듈 이름이나 도메인 이름을 포함시켜 이름 충돌을 방지하는 것
 * - 대규모 프로젝트에서는 서로 다른 모듈에서 동일한 이름의 액션 타입이 생길 가능성이 높다
 */

// #4. 액션 생성자 정의
// - 이를 통해 컴포넌트에 액션을 쉽게 dispatch 할 수 있음

// 액션 생성 (= 액션 객체를 반환하는 함수)
export const plus = () => ({ type: PLUS }); // return {type: 'counter/PLUS'}
export const minus = () => ({ type: MINUS });
