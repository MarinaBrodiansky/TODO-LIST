import './TodoForm.css';
import React from 'react';
import { useState } from 'react';

const TodoForm = (props) => {
    const [value, setValue] = useState('')
    return (
        <form className='form' onSubmit={evt => {
            evt.preventDefault();
            props.putTodo(value);
            setValue('')
        }}>
            <input 
            type='text' 
            placeholder='введите задачу' 
            className='input' 
            value={value}
            onChange={evt => setValue(evt.target.value)}
            />
        </form>
    )
}

export default TodoForm;