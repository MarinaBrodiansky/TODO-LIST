import './App.css';
import {useState} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import trash from '../../images/delete-icon.png'

function App() {
  const [todos, setTodos] = useState([]);

  const putTodo = (value) => {
    if(value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else {
      alert('введие задачу')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className='wrapper'>
      <div className='container'>
        <h1 className='title'>Todo List</h1>
        <TodoForm
          putTodo={putTodo} 
        />
        <ul className='todos'>
          {
            todos.map(todo => {
              return (
                <li 
                className={todo.done ? 'todo done' : 'todo'} 
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                  <img 
                  src={trash} 
                  alt='иконка корзины' 
                  className='delete-button' 
                  onClick= {evt => {
                    evt.stopPropagation()
                    deleteTodo(todo.id);
                  }} 
                  />
                </li>
              )
            })
          }
          
        </ul>
      </div>
     
    </div>
  );
}

export default App;
