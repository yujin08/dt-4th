import './App.css';
import Form from './components/react-hook-form/Form';
import FormPrc from './components/react-hook-form/FormPrc';
import Faq from './Faq';
import useTitle from './hooks/useTitle';
import { ThemeMiddle } from './ThemeMiddle';
import { ThemeProvider } from './ThemeProvider';
import UseCallbackEx2 from './UseCallbackEx2';
import ShoppingCartApp from './UseCallbackPrac';
import ProductFilter from './UseMemoPrac';
import TodoApp from './UseReducerPrac';

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
      {/* <ShoppingCartApp></ShoppingCartApp> */}
      {/* <TodoApp></TodoApp> */}
      {/* <Form></Form> */}
      <FormPrc></FormPrc>
    </div>
  );
}

export default App;
