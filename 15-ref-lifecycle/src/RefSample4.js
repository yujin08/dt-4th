import React, { Component } from 'react';

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef()를 담기
  // #1. Ref 객체 생성
  inputRef = React.createRef();

  handleFocus = () => {
    console.log('this >>>', this);
    // #3. ref 설정 후, DOM 접근을 위해서는 this.inputRef.current까지 접근
    console.log('inputRef_current >>>', this.inputRef.current);
    this.inputRef.current.focus();
  };
  render() {
    console.log('inputRef >>>', this.inputRef);
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리!</p>
        {/* #2. ref prop 사용해서 this.inputRef에 참조 연결 */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
