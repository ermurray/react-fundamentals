import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log('count', count)
  // const count = stateCount[0];
  // const setCount = stateCount[1];

  return (
    <button
    onMouseEnter={() => console.log('hovered')}
    onClick={() => setCount(prev => prev + 1)}
    >
      Clicked {count} Times
    </button>
  )
}

export default Counter;
