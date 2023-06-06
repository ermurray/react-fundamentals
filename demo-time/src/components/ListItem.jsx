import React from 'react'

const ListItem = ({index, title}) => (
<div>
  <h1>{title}</h1>
  <span>:{index}</span>
  </div>);

export default ListItem;