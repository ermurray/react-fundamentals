const SayHello = (props) => {
  console.log('inside say hello');

  return (
  <>
    <p>{`${props.greeting[0]} im Erics Macbook`}</p>
    <p>
      {`Hello ${props.name}`}
    </p>
    <p>{props.greeting[1]}</p>
  </>
  );
};

export default SayHello;
