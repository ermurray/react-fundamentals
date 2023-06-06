import React from 'react' // ESM
// const React = require('react') // COMMON JS SYNTAX

const Button = ({handleClick, count, myNum}) => {

  

 
  return (
    <>
      <button
        onClick={handleClick}
      >
        my fancy button
      </button>
      {/* <div>
        Count:{count}
      </div>
      <span>{myNum}</span> */}
    </>
  )
};

export default Button;
// modules.export = Button;