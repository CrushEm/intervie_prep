import React, { useState, useRef, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import { User } from './types/types';
import Counter from './components/Counter';
import UserRegistrationForm from './components/UserRegistrationForm';
import Button, { Variants } from './components/Button';
import GridDisplay from './components/GridDisplay';


interface ToDoListItem {
  id: number,
  text: string,
  completed: boolean,
}

const initialUser = {
  id: 1,
  name: "Dionel Sylvester",
  age: 32,
  email: "dionel.sylvester@example.com",
  address: "123 Fitness St, Florida"
} as User;


function App() {

  const [user, setUser] = useState<User>(initialUser);
  const [disableBtns, setDisableBtns] = useState<boolean>(false);

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };
  const [tasksDefault, setTasksDefault] = useState<ToDoListItem[]>([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true }
  ]);

  const [tasks, setTasks] = useState<ToDoListItem[]>(()=>{
    const localData = localStorage.getItem('todolist');
    return localData ? JSON.parse(localData) : [];
  });

  const toDoRef = useRef<HTMLInputElement>(null);
  function addToDo() {
    const todoValue = toDoRef.current?.value;
    //console.log(todo);
    if (todoValue) {
      const newToDo: ToDoListItem = {
        id: tasks.length + 1,
        text: todoValue,
        completed: false,
      };
      //tasks.push(newToDo);

      setTasks([...tasks, newToDo]);
      toDoRef.current.value = "";
      //console.log(tasks);
    }
  }
  function deleteTask(id: number) {
    //console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
  }
  useEffect(() => {
    if (tasks) {
      localStorage.setItem('todolist', JSON.stringify(tasks));
      console.log("saved to localStorage");
    }
  }, [tasks]);

  useEffect(() => {
    const localtodo = localStorage.getItem('todolist');
    if (localtodo ) {
      setTasks(JSON.parse(localtodo));
    }
  }, []);

  function handleToggleClick(e: React.MouseEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement; // Cast target here
    console.log(target.checked);
    setDisableBtns(target.checked);
  }

  const sampleGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>User Profile Card</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {user.address && <p><strong>Address:</strong> {user.address}</p>}
        <button onClick={updateUserAge}>Increase Age</button>
      </div>

      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>To-Do List</h2>

        <div>
          <input type="text" ref={toDoRef} />
          <Button
            label="Add Todo"
            variant={Variants.primary}
            onclick={() => { addToDo() }}
            value="Primary Click"
          />

        </div>


        <ToDoList items={tasks} renderItem={(task) => (
          <>
            <p key={task.id}>{task.text} {task.completed ? "✔️" : "❌"}</p>
            <Button
              label={`delete task${task.id}`}
              variant={Variants.outline}
              onclick={() => { deleteTask(task.id) }}
              value="Primary Click"
            />
          </>
        )} />
      </div>

      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Counter</h2>
        <Counter initialCount={5} />
      </div>

      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Form Components Examples</h2>
        <UserRegistrationForm />
      </div>

      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Button Exercise</h2>
        <Button
          label="Submit"
          variant={Variants.primary}
          onclick={(value) => console.log(value)}
          value="Primary Click"
          disabled={disableBtns}
        />
        <Button
          label="Submit"
          variant={Variants.secondary}
          onclick={(value) => console.log(value)}
          value="Secondary Click"
          disabled={disableBtns}
        />
        <Button
          label="Submit"
          variant={Variants.outline}
          onclick={(value) => console.log(value)}
          value="Outline Click"
          disabled={disableBtns}
        />
        <input type="checkbox" onClick={handleToggleClick} />
      </div>
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>DisplayGrid Template</h2>
         <GridDisplay grid={sampleGrid} />
      </div>
    </>
  );
}

export default App;
