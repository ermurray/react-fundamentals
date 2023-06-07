import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Input from './components/Input';
import Button from './components/Button';

const things = [
  {
    title: 'Thing1',
    id: 1,
  },
  {
    title: 'Thing2',
    id: 2,
  },
  {
    title: 'Cat in the Hat',
    id: 3
  },
  {
    title: 'Sam',
    id: 4
  }
];


const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <div>another div</div>
      <List
        items={things}
        count={count}
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button clickHandler={handleClick}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
