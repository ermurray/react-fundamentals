import React from 'react'; //ESM
import ListItem from './ListItem';
import Counter from './Counter';


export const List = (props) => {
  console.log('things:', props.items)
  return (
    <>
    <div>List</div>
    <div>
      {props.items.map((elm, index) =>
        (<ListItem
          key={elm.id}
          title={elm.title}
          index={index}
        />)
      )}
    </div>
    <Counter count={props.count}/>
    </>
  )
}

export default List;
