import './App.css';
import Counter from './Counter';
import SayHello from './SayHello';
import Form from './Form';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <SayHello
        greeting={['Hello there!', 'Nice to meet you']}
        name={'William'}
      />
      <Counter />
      <Form />
      </header>
    </div>
  );
}

export default App;
