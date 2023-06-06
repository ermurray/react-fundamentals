import React from 'react';
import Input from './Input';

// export const myArr = [1,2,3];
// export const myObj = { yay:'string' }
// export const myFunc = () => console.log('im a function');
const Counter = ({ count }) => (
  <>
    <div>Counter:{count}</div>
    { (count > 6 && count < 10) &&
      <Input/>}
  </>
);

export default Counter;
