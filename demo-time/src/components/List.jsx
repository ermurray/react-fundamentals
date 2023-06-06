import React from 'react'
import ListItem from './ListItem';

const List = ({ things }) => {

 return things.map((elem, index) => (
 <ListItem
 key={elem.id}
 index={index}
 title={elem.title} 
 />
 ));
}

export default List;