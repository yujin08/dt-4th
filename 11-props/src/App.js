// import logo from './logo.svg';
import './App.css';
import Button from './Button';
// import ClassComponent from './ClassComponent';
import ClassComponent from './ClassComponent copy';
import FoodComponent from './Food';
import FunctionComponent from './FunctionComponent';
import MultiChild from './MultiChild';
import BookComponent from './Props2';

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
      <FoodComponent food="햄버거"></FoodComponent>
      <BookComponent
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price={13500}
        type="자기계발서"
      ></BookComponent>

      <hr />
      {/* children - 단일 자식 요소 전달 */}
      <Button link="https://www.google.com">Google</Button>
      <Button></Button>
      <hr />
      {/* children - 다중 자식 요소 전달 */}
      <MultiChild>
        <b>다중 자식</b>
        <p>요소 전달</p>
        <div>체험 해보기</div>
      </MultiChild>
    </div>
  );
}

export default App;
