const Button = (props) => {
 

  return(
    <>
      <button onClick={props.clickHandler}>
      {props.title ? props.title : 'Increase Count' }
      </button>
    </>
  )
}

export default Button;