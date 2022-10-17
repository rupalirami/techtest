import React from 'react'
import { useState } from 'react';
import './ToDoList.scss';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';


const ToDoList = () => {
    const [todos, setTodos] = useState(
        [{
                id: 0,
                text:"Nothing to see here yet...Add a task in the field above!☝🏼"
        }]);
    const [todo, setTodo] = useState("");

    const handleInput = () => {
        const newTodo = {
            id: Math.floor(Math.random()*5000),
            text: todo
        }

        // const newTodos = [...todos, newTodo]
        // setTodos({newTodos});
        setTodos([...todos].concat(newTodo));
        setTodo("");
    };
    const todosJSX = todos.map(inputValue => 
      <div className="todo" key={inputValue.id}>
        <div className="todo__text" >{inputValue.text}</div>
      </div>
    );

    return (
        <>
            <Nav />
            <div className='task'>
                {/* <form className='task__form' onSubmit={handleInput}>  */}
                <form className='task__form' > 
                        <input 
                            className='task__input' 
                            type='text' 
                            value={todo} 
                            placeholder="Add your task here..." />
                     <Button className='task__button' buttonText={"+"} isRound={true} onClick={handleInput} />
                </form>
            </div>
            <div className='todo'>{todosJSX}</div>
        </>

    );
};

export default ToDoList;