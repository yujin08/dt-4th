// import logo from './logo.svg';
import './App.css';
import CountClass from './CountClass';
import { CounterFunction } from './CounterFunction';
import { SayFunction } from './SayFunction';
import State1 from './State1';
import { State2 } from './State2';

function App() {
  return (
    <div className="App">
      <CountClass></CountClass>
      <hr />
      <CounterFunction value={'Plus 1'}></CounterFunction>
      <hr />
      <SayFunction></SayFunction>
      <hr />
      <State1></State1>
      <hr />
      <State2></State2>
    </div>
  );
}

export default App;
