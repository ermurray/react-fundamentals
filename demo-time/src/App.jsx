import { useState } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import MyCounter from './components/Counter';
import List from './components/List';
import './App.css';

const mythings = [
  {
    title: 'car',
    id: 1,
  },
  {
    title: 'bus',
    id: 2,
  },
  {
    title: 'truck',
    id: 3,
  }
]


function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(99);

  const handleClick = () => {
    setCount(prev => prev +1)
  }

  return (
    <>
      <div className="App">
        <List
          things={mythings}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyCounter count={count} />
          <Button
            myNum={num}
            handleClick={handleClick}
            count={count}
          />
        </header>
      </div>
    </>
  );
}

export default App;
