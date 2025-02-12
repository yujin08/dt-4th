import './App.css';
import BasicCss from './components/BasicCss';
import CssModuleComponents from './components/CssModuleComponents';
import GrowthDiary from './components/GrowthDiary';
import Home from './components/Home';
import Login from './components/Login';
import Mypage from './components/Mypage';
// import SassComponent from './components/SassComponent';
import ScssPrc from './components/ScssPrc';
import ScssPrc2 from './components/ScssPrc2';
import Signup from './components/Signup';
import StyledComponent from './components/StyledComponent';
import Vaccination from './components/Vaccination';

function App() {
  return (
    <div className="App">
      {/* <BasicCss></BasicCss>
      <CssModuleComponents></CssModuleComponents>
      <SassComponent></SassComponent> */}
      {/* <StyledComponent></StyledComponent> */}
      {/* <ScssPrc></ScssPrc> */}
      {/* <ScssPrc2></ScssPrc2> */}
      <Login></Login>
      <Signup />
      <Home />
      <Vaccination />
      <GrowthDiary />
      <Mypage />
    </div>
  );
}

export default App;
