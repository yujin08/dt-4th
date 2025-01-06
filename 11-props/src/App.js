// import logo from './logo.svg';
import './App.css';
// import ClassComponent from './ClassComponent';
import ClassComponent from './ClassComponent copy';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent></ClassComponent>
      <hr />
      <ClassComponent place="새싹 강동캠퍼스 5층" text="text"></ClassComponent>
      <hr />
      <FunctionComponent></FunctionComponent>
      <hr />
      <FunctionComponent name="john" age={30}></FunctionComponent>
      {/* JSX에서 JS 표현식을 평가하는 용도로 사용하는게 {} */}
      {/* {}로 감싸야 React가 이것을 JS 숫자로 인식함 */}
    </div>
  );
}

export default App;
