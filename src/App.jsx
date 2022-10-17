import React from 'react'
import './App.scss';
import ToDoList from './components/ToDoList/ToDoList';


const App = () => {

  return (
      <div className='App'>
        <ToDoList />
        {/* <p className='task__footer'>
          Nothing to see here yet...Add a task in the field above!☝🏼
        </p> */}
      </div>
  );
};

export default App;