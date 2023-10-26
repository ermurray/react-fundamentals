import { useState } from 'react';

const Form = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
    console.log('todoList', todoList);

  const handleInputChange =  (event) => {
    const value = event.target.value;
    setTodo(value);
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();

      setTodoList(prev => [...prev, todo]);

      setTodo(''); // clear the input
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <input
        label='my fancy input'
        value={todo}
        onChange={handleInputChange}
        />
        <input type='submit' value='Add new Todo' />
      </form>
      <ul>
        {todoList.length < 1 
          && <p>No todo's you work to hard</p>
        }
        {
          todoList.length > 0
          && todoList.map((todo) => <li key={todo}>{todo}</li>)
        }
      </ul>


    </>
  )
};

export default Form;
