import './App.css';
import Faq from './Faq';
import useTitle from './hooks/useTitle';
import { ThemeMiddle } from './ThemeMiddle';
import { ThemeProvider } from './ThemeProvider';
import UseCallbackEx2 from './UseCallbackEx2';
import ShoppingCartApp from './UseCallbackPrac';
import ProductFilter from './UseMemoPrac';

function App() {
  useTitle('React Hooks 학습중!');
  return (
    <div className="App">
      {/* <UseCallbackEx2 postId={9}></UseCallbackEx2> */}
      {/* <ProductFilter></ProductFilter> */}
      {/* <ThemeProvider>
        <ThemeMiddle></ThemeMiddle>
      </ThemeProvider> */}
      {/* <Faq></Faq> */}
      <ShoppingCartApp></ShoppingCartApp>
    </div>
  );
}

export default App;
