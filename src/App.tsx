import React, { useState, useEffect } from 'react';
import './App.css';
import { useStore } from 'effector-react';
import {$todos, addNewTodo} from './effector/store/todos';
import { TodoList } from './components/TodoList';
import { $users, getAllUsers } from './effector/store/users';
import { UserStoreI } from './effector/store/users';
import { changeUsersState } from './effector/store/users';

const App: React.FC = () => {
  const todos = useStore($todos);
  const users = useStore($users);

  useEffect( () => {
    if(!users.users.length) {
      const asyncWrapper = async() => {
        let users = await getAllUsers();
        changeUsersState(users);
      }
      asyncWrapper();
    }
  }, [users]);

  const [value, setValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (eo) => setValue(eo.target.value);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => addNewTodo({
    id: Date.now(),
    title: value,
    status: false
  });

  console.log(users)

  return (
      <div className='App'>
        <input type='text' value={value} onChange={handleChange}/>
        <button onClick={handleClick}>click me</button>
        {
          !todos.todos.length 
          ? <p>Please add new Todo to the list</p>
          : <TodoList todos={todos.todos}/>
        }
    </div>
  )
}

export default App;