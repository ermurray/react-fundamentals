import { useState } from 'react';

const Input = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div>
      <input
        type='text'
        onClick={() => console.log('clicked')}
        onBlur={() => console.log('blurred')}
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        />
      <span>Value: {inputVal}</span>
    </div>

  )
}

export default Input;