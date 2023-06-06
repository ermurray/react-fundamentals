import React from 'react'

const Input = () => {
  return (
    <div>
      {/* <span onMouseOver={()=> console.log('hover count')}>Count:</span> */}
      <input type='text' onBlur={()=> console.log('blurring')}/>
    </div>
  )
}

export default Input;