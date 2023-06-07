import React, { useState } from 'react'
import Title from './Title';
import Button from './Button';

const ListItem = (props) => {
  const [localCount, setLocalCount] = useState(0);
  return (
    <div>
      <div>
        <Button title={props.title} clickHandler={() => setLocalCount(prev => prev + 2)}/>
        <h6>{localCount}:</h6>
        {/* {props.index <= 2 && <h1>{props.title}</h1>}
        {props.index > 2 && <Title title={props.title}/>} */}
        {props.index <=2
          ? <h1>{props.title}</h1>
          : <Title title={props.title}/>
        }
      </div>
    </div>
  )
}

export default ListItem;
